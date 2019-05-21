(function() {
    "use strict";

    var app = angular.module('progressBarApp', []);

    app.factory('apiHelper', ['$http', '$q', Factory])
    function Factory($http, $q) {
        const PAGE_SIZE = 20;

        function get(url, params) {
            var defer = $q.defer();
            var parameters;

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
                        total,
                        next_page_number: next ? current + 1 : null,
                        previous_page_number: previous ? current - 1: null,
                    });
                }
                defer.reject({error: "Something seems to be wrong"})
            }

            if (!params) {
                parameters = { _page: 1, _limit: PAGE_SIZE };
            }

            if (params) {
                parameters = {
                    _page: params.page,
                    _limit: params.limit,
                }
            }

            $http.get(url, { params: parameters }).then(onGet);
            return defer.promise;
        }

        return { get: (url, params) => get(url, params) }
    }


    app.controller('mainController', ['$scope', 'apiHelper', Controller])
    function Controller($scope, apiHelper) {
        $scope.posts = [];
        $scope.completionPercentage = 0;
        let progressBar = angular.element('.custom-progress-bar .color');

        function keepOnRequestingUntilTheEnd(url, params=null) {

            const onSuccess = (response) => {
                $scope.posts = [...$scope.posts, ...response.data];
                if (response.next) {
                    keepOnRequestingUntilTheEnd(url, {
                        page: response.next_page_number,
                        limit: 20
                    })
                }
                if (!response.next) {
                    progressBar.css({ width: "101.3%" });
                    $scope.completionPercentage = 100;
                }
            }

            const onUpdate = (update) => {
                let ratio = parseInt(update.count) / parseInt(update.total);
                $scope.completionPercentage = Math.floor(ratio * 100);
                progressBar.css({ width: $scope.completionPercentage + "%" });
            }

            const onError = (error) => console.log(error);

            apiHelper.get(url, params)
                .then(onSuccess, null, onUpdate)
                .catch(onError)
        }

        keepOnRequestingUntilTheEnd("http://jsonplaceholder.typicode.com/posts");
    }
})();