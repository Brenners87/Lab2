import{toDoInterfaces} from './toDoInterfaces';

class toDoClass implements toDoInterfaces{
    MyTasks:Array<string>=[];

addTask(task:string): number {
    console.log("string inserted");
    return  this.MyTasks.push(task);    
 }

 listAllTasks():void{
    console.log("beginning of array");
    this.MyTasks.forEach(function(task){
    console.log(task);
    })
    console.log("End of array");
}


deleteTask(task:string):number{
    let index:number = this.MyTasks.indexOf(task);
    if(index > -1){
       this. MyTasks.splice(index,1);
    }else{
        console.log("Item: "+task+" not found!");
    }
    return this.MyTasks.length;
}
}//toDoClass

let testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.listAllTasks();
testClass.deleteTask("element1");