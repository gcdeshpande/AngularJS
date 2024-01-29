var app = angular.module('dateApp', []);

app.controller('dateController', function($scope) {
    $scope.currentDate = new Date();
});
