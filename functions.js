var MyTasks = [];
var num = 0;
console.log("TESTING");
num = addTask("string");
num = addTask("required");
console.log(num);
listAllTasks();
num = deleteTask("string");
console.log(num);
listAllTasks();
//part b
function addTask(task) {
    console.log("string inserted");
    return MyTasks.push(task);
}
//part c
function listAllTasks() {
    console.log("beginning of array");
    MyTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of array");
}
//part d
function deleteTask(task) {
    var index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
    }
    else {
        console.log("Item: " + task + " not found!");
    }
    return MyTasks.length;
}
