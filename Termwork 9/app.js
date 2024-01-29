var app = angular.module('employeeApp', []);

app.controller('employeeController', function($scope) {
    $scope.employees = [
        { name: 'John Doe', salary: 50000 },
        { name: 'Jane Smith', salary: 60000 },
        { name: 'Emily Johnson', salary: 70000 }
        // Add more employees as needed
    ];

    $scope.customSalaryFilter = function(employee) {
        if (!$scope.searchSalary || employee.salary >= $scope.searchSalary) {
            return true;
        }
        return false;
    };
});
