var app = angular.module('mainApp', [])
app.controller('formCtrl', ['$scope', '$http', Ctrl])

function Ctrl($scope, $http) {
    $scope.formWithErrors = true;
    $scope.busy = false;

    $scope.form = {
        email: "",
        password: ""
    };

    $scope.errors = {
        email: false,
        password: false
    }

    var watchGroup = Object.keys($scope.form).map((field) => `form.${field}`)
    $scope.$watchGroup(watchGroup, (newValue, oldValue) => {
        if (oldValue !== newValue) {
            $scope.formWithErrors = false;
            $scope.busy = false;
        }
    })

    var regexPatterns = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/
    }

    var checkEmail = (emailFormData) => {
        if (regexPatterns.email.test(emailFormData)) {
            return true
        }
        return {
            field: 'email',
            message: "Invalid Email Address"
        }
    }

    var checkPassword = (passwordFormData) => {
        if (regexPatterns.password.test(passwordFormData)) {
            return true
        }
        return {
            field: 'password',
            message: "Invalid Password Field"
        }
    }

    var validator =  (type, formData) => {
        switch (type) {
            case 'email':
                return checkEmail(formData)
            case 'password':
                return checkPassword(formData)
            default: return
        }
    }

    var clearForm = () => {
        Object.keys($scope.form).forEach((field) => {
            $scope.form[field] = ''
        })
    }

    $scope.submit = () => {
        $scope.busy = true;
        $scope.errors = Object.keys($scope.form).reduce((newObj, field) => {
            return Object.assign({}, newObj, {[field]: validator(field, $scope.form[field])})
        }, {})
        var allTheFieldsAreTrue = Object.keys($scope.errors).every((field) => {
            return $scope.errors[field] == true;
        })
        if (allTheFieldsAreTrue) {
            var onSuccess = (response) => {
                console.log(response);
                $scope.busy = false;
                clearForm();
            }

            var onError = (response) => {
                console.log(response);
            }

            $http.post('main.php', $scope.form).then(onSuccess).catch(onError);
            return;
        }
        $scope.busy = false;
        $scope.formWithErrors = true;
    }
}