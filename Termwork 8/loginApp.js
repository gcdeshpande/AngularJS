var app = angular.module('loginApp', []);

app.controller('loginController', function($scope) {
    $scope.user = { username: '', password: '' };

    $scope.submitForm = function() {
        if ($scope.loginForm.$valid) {
            alert('Form is valid!');
            // Here you can handle the form submission, like sending data to the server
        } else {
            alert('Form is invalid!');
        }
    };
});
