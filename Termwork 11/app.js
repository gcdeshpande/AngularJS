var app = angular.module('studentApp', []);

app.controller('studentController', function($scope) {
    $scope.students = [
        'John Doe, Age: 20, Major: Computer Science',
        'Jane Smith, Age: 22, Major: Mathematics',
        'Emily Johnson, Age: 21, Major: Physics'
        // Add more students as needed
    ];
});

app.filter('uppercaseStudent', function() {
    return function(input) {
        return input ? input.toUpperCase() : '';
    };
});
