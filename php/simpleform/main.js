var app = angular.module('omis-subscription', []);

/**
 * Fake Translation for the form
 */
app.constant('translation', {
    en: {
        OMIS_SUBSCRIPTION_FORM: 'Omis Subscription Form',
        NAME: 'Name',
        YOUR_NAME: 'Your Name',
        FIRST_NAME: 'First Name',
        LAST_NAME: 'Last Name',
        EMAIL: 'Email',
        EMAIL_OPTIONAL: 'Give your email address (optional)',
        PHONE: 'Phone',
        PHONE_DESC: "Write your phone number so that our executive can contact you!",
        PACKAGE: "Package",
        PACKAGE_DESC: "Chose which package you want to subscribe",
        HOSPITAL_MANAGEMENT_SYSTEM: 'Hospital Management System',
        PHARMACY_SOLUTION: 'Pharmacy Solution',
        DIAGNOSTIC_MANAGEMENT_SYSTEM: 'Diagnostic Management System',
        ADDRESS: "Address",
        ADDRESS_OF_YOUR_ORGANIZATION: 'Address of your Organization',
        STREET_ADDRESS: 'Street Address',
        STREET_ADDRESS_LINE_2: 'Street Address Line 2',
        CITY: 'City',
        REGION: 'Region',
        POSTAL: 'Postal/ Zip Code',
        COUNTRY: 'Country',
        SEND: 'Send',
        INVALID_EMAIL_ADDRESS: 'Invalid Email Address',
        INVALID_PHONE_NUMBER: 'Invalid Phone Number',
        FIELD_CANNOT_BE_EMPTY: "Field cannot be empty",
        INVALID_PASSWORD_FIELD: "Invalid Password Field",
        PLEASE_SELECT_ONE_OF_THE_CHOICE: "Please select one of the choice",
        FORM_SUCCESSFULLY_SUBMITTED: "Your form has been successfully submitted",
        FORM_SUBMISSION: "Form Submission",
        FEW_SECONDS_AGO: "Few seconds ago",
        FORM_ERROR: "Please, check the errors in the field",
    },
    bn: {

    }
/**
 * Regular Expression Patterns
 */
}).constant('regexPatterns', {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    notEmpty: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/
/**
 *  Front end validation
 */
}).factory('validation', ['regexPatterns', function (regexPatterns){

    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    var checkEmail = function (emailFormData, field) {
        if (regexPatterns.email.test(emailFormData)) {
            return true
        }
        return {
            field: field,
            message: "Invalid Email Address"
        }
    }
    var checkPhone = function (phoneFormData, field) {
        if (regexPatterns.phone.test(phoneFormData)) {
            return true
        }
        return {
            field: field,
            message: "Invalid Phone Number"
        }
    }

    var checkNotEmpty = function (notEmptyFormData, field) {
        if (regexPatterns.notEmpty.test(notEmptyFormData)) {
            return true
        }
        return {
            field: field,
            message: "Field cannot be empty"
        }
    }

    var checkPassword = function (passwordFormData, field) {
        if (regexPatterns.password.test(passwordFormData)) {
            return true
        }
        return {
            field: field,
            message: "Invalid Password Field"
        }
    }

    var checkIsObjectEmpty = function (isObjectData, field) {
        if (!isEmpty(isObjectData)) {
            return true
        }
        return {
            field: field,
            message: "Please select one of the choice"
        }
    }

    var checkNotRequired = function(notRequiredData, field) {
        return true
    }


    return {
        validator: function (type, formData, field) {
            switch (type) {
                case 'email':
                    return checkEmail(formData, field)
                case 'phone':
                    return checkPhone(formData, field)
                case 'notEmpty':
                    return checkNotEmpty(formData, field)
                case 'password':
                    return checkPassword(formData, field)
                case 'isObjectEmpty':
                    return checkIsObjectEmpty(formData, field)
                case 'notRequired':
                    return checkNotRequired(formData, field)
                default: return
            }
        }
    }
/**
 * Form Helper does the clean up, checks Error, checks if all the fields are valid or not
 */
}]).factory('formHelper', ['validation', function(validation) {
    return {
        clear: function(form) {
            return Object.keys(form).forEach((field) => {
                form[field] = ''
            })
        },
        checkErrors: function(form, fieldValidators) {
            return Object.keys(form).reduce((newObj, field) => {
                return Object.assign({}, newObj,
                    { [field]: validation.validator(fieldValidators[field], form[field], field) })
            }, {})
        },
        checkIfAllTheFieldsAreTrue: function(errors) {
            return Object.keys(errors).every((field) => {
                return errors[field] == true;
            })
        }
    }
/**
 * Call End Point for the data
 */
}]).factory('apiHelper', [ '$http', '$q', function($http, $q) {
    return {
        post: function(url, data) {
            var def = $q.defer();
            $http.post(url, data).then(function(response) {
                def.resolve(response.data);
            }).catch(function(error) {
                def.reject(error);
            })
            return def.promise;
        }
    }
}])
/**
 * Subscription Form Controller
 */
.controller('subscriptionFormCtrl', ['$scope', 'translation', 'formHelper', 'apiHelper',
function ($scope, translation, formHelper, apiHelper) {
    $scope.currentLanguage = 'en';
    $scope.formWithErrors = false;
    $scope.busy = false;
    $scope.translation = translation;
    $scope.success = null;

    $scope.changeLanguage = (whichLanguage) => {
        $scope.currentLanguage = whichLanguage;
    };

    $scope.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        package: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        region: '',
        postal: '',
        country: '',
    };

    // false => Field hasn't been touched,
    // true => Validation passed
    // Object => Field error, didn't passed the validation
    $scope.errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        package: false,
        addressOne: false,
        addressTwo: false,
        city: false,
        region: false,
        postal: false,
        country: false,
        overall: false
    }

    var fieldValidators = {
        firstName: 'notEmpty',
        lastName: 'notEmpty',
        email: 'notRequired',
        phone: 'phone',
        package: 'isObjectEmpty',
        addressOne: 'notEmpty',
        addressTwo: 'notRequired',
        city: 'notEmpty',
        region: 'notEmpty',
        postal: 'notEmpty',
        country: 'notEmpty',
        overall: 'notRequired'
    }

    var watchGroup = Object.keys($scope.form).map((field) => `form.${field}`)
    $scope.$watchGroup(watchGroup, (newValue, oldValue) => {
        Object.keys($scope.form).forEach((value, index) => {
            if (newValue[index] !== oldValue[index]) {
                $scope.errors[value] = false;
                $scope.formWithErrors = false;
                $scope.busy = false;
                $scope.success = '';
            }
        })
    })

    $scope.packages = [
        {
            name: $scope.translation[$scope.currentLanguage].HOSPITAL_MANAGEMENT_SYSTEM,
            enum: 1
        },
        {
            name: $scope.translation[$scope.currentLanguage].PHARMACY_SOLUTION,
            enum: 2
        },
        {
            name: $scope.translation[$scope.currentLanguage].DIAGNOSTIC_MANAGEMENT_SYSTEM,
            enum: 3
        },
    ];

    $scope.submit = () => {
        $scope.busy = true;
        $scope.errors = Object.assign({}, formHelper.checkErrors($scope.form, fieldValidators), { overall: true });
        var allTheFieldsAreTrue = formHelper.checkIfAllTheFieldsAreTrue($scope.errors);
        if (allTheFieldsAreTrue) {
            var onSuccess = (response) => {
                if (response.success) {
                    $scope.success = $scope.translation[$scope.currentLanguage].FORM_SUCCESSFULLY_SUBMITTED;
                }
                $scope.busy = false;
                // formHelper.clear($scope.form)
            }

            var onError = (response) => {
                if (angular.isObject(response.data)) {
                    Object.keys(response.data).forEach((field) => {
                        $scope.errors[field] = {
                            message: response.data[field].message
                        }
                    })
                    $scope.busy = false;
                    $scope.formWithErrors = true;
                    return;
                }
            }

            apiHelper.post('main.php', $scope.form).then(onSuccess).catch(onError);
            return;
        }
        $scope.busy = false;
        $scope.formWithErrors = true;
    }

    $scope.closeToast = () => {
        $scope.success = '';
        $scope.formWithErrors = false;
    }
}])