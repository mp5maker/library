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