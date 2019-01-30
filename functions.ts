let MyTasks:Array<string>=[];
let num: number =0;
console.log("TESTING");

num= addTask("string");
num= addTask("required");
console.log(num);
listAllTasks();
num = deleteTask("string");
console.log(num);
listAllTasks();
//part b
function addTask(task:string): number {
   console.log("string inserted");
   return  MyTasks.push(task);    
}

//part c
function listAllTasks():void{
    console.log("beginning of array");
    MyTasks.forEach(function(task){
    console.log(task);
    })
    console.log("End of array");
}

//part d
function deleteTask(task:string):number{
    let index:number = MyTasks.indexOf(task);
    if(index > -1){
        MyTasks.splice(index,1);
    }else{
        console.log("Item: "+task+" not found!");
    }
    return MyTasks.length;
}