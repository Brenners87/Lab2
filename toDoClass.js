"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.MyTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        console.log("string inserted");
        return this.MyTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        console.log("beginning of array");
        this.MyTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of array");
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.MyTasks.indexOf(task);
        if (index > -1) {
            this.MyTasks.splice(index, 1);
        }
        else {
            console.log("Item: " + task + " not found!");
        }
        return this.MyTasks.length;
    };
    return toDoClass;
}()); //toDoClass
var testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.listAllTasks();
testClass.deleteTask("element1");
