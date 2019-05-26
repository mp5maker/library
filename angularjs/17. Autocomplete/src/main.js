(function() {
    var app = angular.module('autocomplete', ['ui.select', 'ngSanitize'])

    app.factory('apiHelper', ['$http', '$q', apiHelper])
    function apiHelper($http, $q) {
        return {
            get: function (url) {
                var defer = $q.defer();
                $http.get(url).then(function (response) {
                    if (response.data) {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(error);
                    }
                })
                return defer.promise;
            }
        }
    }

    app.factory('commonHelper', ['apiHelper', '$timeout', commonHelper])
    function commonHelper(apiHelper, $timeout) {
        return {
            scrollUiSelect: ({id, isOpen, api, scope} = {}) => {
                var timeout, onScrollUiSelectChoices;
                const uiSelectChoices = angular.element(`#${id}`)
                    .controller('uiSelect').$element
                    .find('.ui-select-choices');
                if (!isOpen) {
                    uiSelectChoices[0].removeEventListener('scroll', onScrollUiSelectChoices);
                    $timeout.cancel(timeout);
                }
                // const conditionHeight = (OffsetTopElement('load-next') - (ScrollY() + WindowHeight()) >= 200)
                if (isOpen) {
                    var busyWithApi = false;
                    onScrollUiSelectChoices = (event) => {
                        const scrollTop = event.target.scrollTop;
                        const offsetHeight = event.target.offsetHeight;
                        const scrollHeight = event.target.scrollHeight;
                        const isAllowedToCallApi = (parseInt(offsetHeight) + parseInt(scrollTop) + 10 > parseInt(scrollHeight));
                        if (isAllowedToCallApi && !busyWithApi) {
                            busyWithApi = true;
                            console.log(api)
                            timeout = $timeout(() => {
                                busyWithApi = false;
                            }, 1000);
                        }
                    }
                    uiSelectChoices[0].addEventListener('scroll', onScrollUiSelectChoices);
                }
                return scope;
            }
        }
    }

    app.controller('mainController', ['$scope', 'apiHelper', '$log', 'commonHelper', mainController])
    function mainController($scope, apiHelper, $log, commonHelper) {
        $scope.form = { person: ""};
        $scope.people = [];
        $scope.peopeleSearch = [];
        $scope.suggestion = "";

        const updateSearchUiPlaceholder = (placeholder) => {
            $scope.suggestion = placeholder;
        }

        const updatePlaceHolder = () => {
            if ($scope.people.length == 1) {
                const { name, email, age, country } = $scope.people[0];
                updateSearchUiPlaceholder(`${name} - ${email} - ${age} - ${country}`);
            } else {
                updateSearchUiPlaceholder('');
            }
        }

        $scope.refreshPeople = (search) => {
            if (search) {
                $scope.people = $scope.peopleSearch.filter((person) => {
                    const { name, email, country } = person;
                    const filterCondition = name.toLowerCase().indexOf(search.toLowerCase()) > -1
                    || email.toLowerCase().indexOf(search.toLowerCase()) > -1
                    || country.toLowerCase().indexOf(search.toLowerCase()) > -1;
                    if (filterCondition) {
                        return person;
                    }
                });
                updatePlaceHolder();
                return;
            }
            const onSuccessPeople = (response) => {
                $scope.people = angular.copy(response.people);
                $scope.peopleSearch = angular.copy(response.people);
                $scope.improvedPlaceholder = "";
            }
            const onErrorPeople = (error) => $log.debug(error);
            apiHelper.get('people.json').then(onSuccessPeople).catch(onErrorPeople);
        }

        $scope.onOpenClose = (isOpen) => {
            commonHelper.scrollUiSelect({
                id: 'people-ui-select',
                isOpen,
                api:'pharmarcy.items',
                scope: $scope.people
            });
            if (!isOpen) {
                $scope.suggestion = "";
            }
        }
    }

})();