// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('mainController', function () {
    beforeEach(module('simpleapp'));

    var $controller, $rootScope;

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }))

    describe('$scope.addition', function() {
        it('It is just a testing comment', function() {
            var $scope = $rootScope.$new();
            var controller = $controller('mainController', {$scope: $scope});

            expect($scope.addition([2,3])).toBe(5)
        })
    })
});