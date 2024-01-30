angular.module('todoApp', [])
.controller('TodoController', function() {
    this.tasks = [{text: 'Task 1', editing: false}, {text: 'Task 2', editing: false}]; // Default tasks
    this.newTask = '';

    this.addTask = function() {
        if (this.newTask !== '') {
            this.tasks.push({text: this.newTask, editing: false});
            this.newTask = '';
        }
    };

    this.deleteTask = function(index) {
        this.tasks.splice(index, 1);
    };
});
