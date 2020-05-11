(function() {
    "use strict";

    angular.module('jwt')
    .factory('APIHelper', ['$http', Factory])

    function Factory($http) {
        return {
            employee: {
                get: function() {
                    return $http.get('localhost:8000/employee')
                }
            },
            token: {
                auth: function({ username, password}) {
                    return $http.post('localhost:8000/token-auth', { username, password })
                },
                refresh: function() {
                    return $http.post('localhost:8000/token-refresh', {
                        token: localStorage.getItem('token')
                    })
                }
            }
        }
    }
})();
(function() {
    "use strict";
    angular.module('jwt')
    .controller('appController', ['$scope', 'APIHelper', Controller])

    function Controller($scope, APIHelper) {
        $scope.form = {
            username: "",
            password: ""
        }

        $scope.formSubmit = () => {
            const username = _.get($scope.form, 'username')
            const password = _.get($scope.form, 'password')
            if (username && password) {
                const onSuccessAuthentication = (response) => {
                    console.log(response)
                }

                APIHelper.token.auth({
                    username,
                    password
                }).then(onSuccessAuthentication)
            }
        }

        APIHelper.employee.get().then((response) => {
            console.log(response)
        })
    }
})()