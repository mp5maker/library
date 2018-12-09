(function(){
    angular.module('angular-dropdown', ['ngAnimate', 'angularjs-dropdown-multiselect'])
    /**
     * Created a simple data structure
     */
    .constant('employee', [
        {
            alias: "345SDFG-sfg-2345",
            name: "Lorem, ipsum dolor.",
            age: 27,
            salary: 25000
        },
        {
            alias: "2345-234587-234598",
            name: "dolor sit amet.",
            age: 30,
            salary: 50000
        },
        {
            alias: "2345234-345-0987",
            name: "elit. Aliquam",
            age: 32,
            salary: 15000
        },
        {
            alias: "2345234-345-0987",
            name: "amet consectetur,",
            age: 69,
            salary: 15000
        },
        {
            alias: "2345234-345-0987",
            name: "Porro quibusdam",
            age: 19,
            salary: 15000
        },
        {
            alias: "2345234-345-0987",
            name: "at tempora",
            age: 38,
            salary: 35000
        },
        {
            alias: "2345234-345-0987",
            name: "suscipit voluptates",
            age: 42,
            salary: 45000
        },
        {
            alias: "2345234-345-0987",
            name: "sapiente praesentium",
            age: 67,
            salary: 20000
        },
        {
            alias: "2345234-345-0987",
            name: "inventore eum",
            age: 79,
            salary: 35000
        },
        {
            alias: "2345234-345-0987",
            name: "repudiandae ab",
            age: 19,
            salary: 40000
        },
    ])
    .controller('mainCtrl', function(employee, $scope){
        $scope.selectedEmployee = []; 
        // The select box needs to have label property orelse the select box do not work
        const updateEmployee = function(employee) {
            Object.keys(employee).forEach(function(key){
                if(employee[key].name) {
                    employee[key].label = employee[key].name;
                }
            });
            return employee;
        }
        $scope.employee = updateEmployee(employee);
        $scope.settings = { 
            keyboardControls: true, 
            enableSearch: true,
            scrollable: true,
        };
    });
})();

