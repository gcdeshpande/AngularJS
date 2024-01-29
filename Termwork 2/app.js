var app = angular.module('shoppingApp', []);

app.controller('shoppingController', function($scope) {
    $scope.items = ['Milk', 'Bread', 'Cheese']; // Default shopping items

    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = ''; // Clear the input field
        }
    };

    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    };
});
