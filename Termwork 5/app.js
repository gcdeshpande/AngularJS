var app = angular.module('studentApp', []);

app.controller('studentController', function($scope) {
    $scope.students = [
        { name: 'Alice', cgpa: 3.5 },
        { name: 'Bob', cgpa: 3.7 },
        { name: 'Charlie', cgpa: 3.8 }
        // Add more students as needed
    ];

    $scope.studentCount = 0;

    $scope.countStudents = function() {
        $scope.studentCount = $scope.students.length;
    };
});
