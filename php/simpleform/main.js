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
        PACKAGE_DESC: "Choose which package you want to subscribe",
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
        ENGLISH: "English",
        BANGLA: "Bangla",
        BACK_SLASH: "/",
    },
    bn: {
        OMIS_SUBSCRIPTION_FORM: 'Omis সাবস্ক্রিপশন ফর্ম',
        NAME: 'নাম',
        YOUR_NAME: 'তোমার নাম',
        FIRST_NAME: 'নামের প্রথম অংশ',
        LAST_NAME: 'নামের শেষাংশ',
        EMAIL: 'ই-মেইল',
        EMAIL_OPTIONAL: 'আপনার ইমেইল ঠিকানা দিন (ঐচ্ছিক)',
        PHONE: 'ফোন',
        PHONE_DESC: "আপনার ফোন নম্বর লিখুন যাতে আমাদের নির্বাহী আপনার সাথে যোগাযোগ করতে পারে!",
        PACKAGE: "প্যাকেজ",
        PACKAGE_DESC: "আপনি সাবস্ক্রাইব করতে চান কোন প্যাকেজ চয়ন করুন",
        HOSPITAL_MANAGEMENT_SYSTEM: 'হাসপাতাল ম্যানেজমেন্ট সিস্টেম',
        PHARMACY_SOLUTION: 'ফার্মেসী সমাধান',
        DIAGNOSTIC_MANAGEMENT_SYSTEM: 'ডায়গনিস্টিক ম্যানেজমেন্ট সিস্টেম',
        ADDRESS: "ঠিকানা",
        ADDRESS_OF_YOUR_ORGANIZATION: 'আপনার প্রতিষ্ঠানের ঠিকানা',
        STREET_ADDRESS: 'রাস্তার ঠিকানা',
        STREET_ADDRESS_LINE_2: 'রাস্তার ঠিকানা লাইন 2',
        CITY: 'শহর',
        REGION: 'এলাকা',
        POSTAL: 'ডাক',
        COUNTRY: 'দেশ',
        SEND: 'পাঠান',
        INVALID_EMAIL_ADDRESS: 'অকার্যকর ইমেইল ঠিকানা',
        INVALID_PHONE_NUMBER: 'অচল ফোন নম্বর',
        FIELD_CANNOT_BE_EMPTY: "ক্ষেত্র খালি হতে পারে না",
        INVALID_PASSWORD_FIELD: "অবৈধ পাসওয়ার্ড ক্ষেত্র",
        PLEASE_SELECT_ONE_OF_THE_CHOICE: "পছন্দ এক নির্বাচন করুন",
        FORM_SUCCESSFULLY_SUBMITTED: "আপনার ফর্ম সফলভাবে জমা দেওয়া হয়েছে",
        FORM_SUBMISSION: "ফর্ম জমা",
        FEW_SECONDS_AGO: "কয়েক সেকেন্ড আগে",
        FORM_ERROR: "ক্ষেত্রের ত্রুটি চেক করুন",
        ENGLISH: "ইংরেজী",
        BANGLA: "বাংলা",
        BACK_SLASH: "/",
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
            return false
        }
        return {
            field: field,
            message: "Invalid Email Address"
        }
    }
    var checkPhone = function (phoneFormData, field) {
        if (regexPatterns.phone.test(phoneFormData)) {
            return false
        }
        return {
            field: field,
            message: "Invalid Phone Number"
        }
    }

    var checkNotEmpty = function (notEmptyFormData, field) {
        if (regexPatterns.notEmpty.test(notEmptyFormData)) {
            return false
        }
        return {
            field: field,
            message: "Field cannot be empty"
        }
    }

    var checkPassword = function (passwordFormData, field) {
        if (regexPatterns.password.test(passwordFormData)) {
            return false
        }
        return {
            field: field,
            message: "Invalid Password Field"
        }
    }

    var checkIsObjectEmpty = function (isObjectData, field) {
        if (!isEmpty(isObjectData)) {
            return false
        }
        return {
            field: field,
            message: "Please select one of the choice"
        }
    }

    var checkNotRequired = function(notRequiredData, field) {
        return false
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
        clear: function(form, defaultValue) {
            return Object.keys(form).forEach((field) => {
                form[field] = angular.isDefined(defaultValue) ? defaultValue : '';
            })
        },
        checkErrors: function(form, fieldValidators) {
            return Object.keys(form).reduce((newObj, field) => {
                return Object.assign({}, newObj,
                    { [field]: validation.validator(fieldValidators[field], form[field], field) })
            }, {})
        },
        checkIfAllTheFieldsAreFalse: function(errors) {
            return Object.keys(errors).every((field) => {
                return errors[field] == false;
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
.controller('subscriptionFormCtrl', ['$scope', 'translation', 'formHelper', 'apiHelper', '$window',
function ($scope, translation, formHelper, apiHelper, $window) {
    $scope.currentLanguage = 'en';
    $scope.formWithErrors = false;
    $scope.busy = false;
    $scope.translation = translation;
    $scope.success = null;

    /**
     * Change Language of the current form
     */
    $scope.changeLanguage = (language) => {
        $scope.currentLanguage = language;
    };

    /**
     * All the fields in the form
     */
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

    /**
     * Validators for the field
     */
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

    /**
     * Watches the form changes
     */
    var watchGroup = Object.keys($scope.form).map((field) => `form.${field}`)
    $scope.$watchGroup(watchGroup, (newValue, oldValue) => {
        Object.keys($scope.form).forEach((value, index) => {
            if (newValue[index] !== oldValue[index]) {
                $scope.errors[value] = false;
                $scope.formWithErrors = false;
                $scope.busy = false;
            }
        })
    })

    /**
     * Packages
     */
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

    /**
     * Form Submit
     */
    $scope.submit = () => {
        $scope.busy = true;
        $scope.errors = Object.assign({}, formHelper.checkErrors($scope.form, fieldValidators), { overall: false });
        var allTheFieldsAreFalse = formHelper.checkIfAllTheFieldsAreFalse($scope.errors);
        if (allTheFieldsAreFalse) {
            var onSuccess = (response) => {
                if (response.success) {
                    $scope.busy = false;
                    formHelper.clear($scope.form);
                    formHelper.clear($scope.errors, false);
                    $window.scrollTo(0, 0);
                    $scope.success = $scope.translation[$scope.currentLanguage].FORM_SUCCESSFULLY_SUBMITTED;
                    return;
                }
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
        $scope.formWithErrors = true;
        $scope.busy = false;
    }

    /**
     * Shows the success/failure message
     */
    $scope.closeToast = () => {
        $scope.success = '';
        $scope.formWithErrors = false;
    }
}])