angular.module('itemApp', [])
.controller('ItemController', function() {
    this.items = ['Item 1', 'Item 2', 'Item 3']; // default items
    this.newItem = '';

    this.addItem = function() {
        if (this.newItem !== '') {
            this.items.push(this.newItem);
            this.newItem = '';
        }
    };

    this.removeItem = function(index) {
        this.items.splice(index, 1);
    };
});
