export interface toDoInterfaces{

    MyTasks:Array<string>;
    addTask(task:string): number;
    listAllTasks():void;
    deleteTask(task:string):number
    }
