angular.module('jwt', [])
var app = angular.module('jwt')

app.run(['$http', Run])
function Run($http) {
    $http.defaults.headers.common = {
        'Authorization': `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }

}

app.config(['$httpProvider', Config])
function Config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push(function($q) {
        return {
            request: function(config) {
                return config
            },
            response: function(response) {
                return response
            },
            requestError: function(rejection) {
                return rejection
            },
            responseError: function(rejection, hello) {
                return rejection
            }
        }
    })
}
