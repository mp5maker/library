(function() {
    "use strict";

    var app = angular.module('progressBarApp', []);

    app.factory('apiHelper', ['$http', '$q', Factory])
    function Factory($http, $q) {
        const PAGE_SIZE = 20;

        function get(url, page) {
            var defer = $q.defer();
            var params = { _page: page ? page : 2, _limit: PAGE_SIZE };

            const onGet = (response) =>  {
                if (response) {
                    const { next, previous } = response.headers('link').split(',').reduce((newObj, perHeaderItem)  => {
                        if (perHeaderItem.indexOf(`rel="prev"`) > -1) {
                            return {
                                ...newObj,
                                previous: perHeaderItem.trim().replace(`>; rel="prev"`,'').replace('<', '')
                            };
                        }
                        if (perHeaderItem.indexOf(`rel="next"`) > -1) {
                            return {
                                ...newObj,
                                next: perHeaderItem.trim().replace(`>; rel="next"`, '').replace('<', '')
                            };
                        }
                        return newObj;
                    }, { next: null, previous: null})

                    const current = response.config.params._page ? parseInt(response.config.params._page) : 1;
                    const count = current ? current * PAGE_SIZE : PAGE_SIZE
                    const total = response.headers('x-total-count')

                    defer.notify({ count, total });
                    defer.resolve({
                        response: response,
                        data: response.data,
                        previous,
                        next,
                        count,
                        total
                    });
                }
                defer.reject({error: "Something seems to be wrong"})
            }
            $http.get(url, { params }).then(onGet);
            return defer.promise;
        }

        return { get: (url, page) => get(url, page) }
    }


    app.controller('mainController', ['$scope', 'apiHelper', Controller])
    function Controller($scope, apiHelper) {
        const onSuccess = (response) => {
            console.log(response)
        }

        const onUpdate = (update) => {
            console.log(update)
        }

        const onError = (error) => {
            console.log(error)
        }

        apiHelper.get("http://jsonplaceholder.typicode.com/posts")
            .then(onSuccess, null, onUpdate)
            .catch(onError)
    }
})();