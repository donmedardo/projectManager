import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[];

  constructor() { }

  ngOnInit() {
    let myItem:Task[] = JSON.parse(localStorage.getItem('tasks'));
    console.info (myItem)
    this.tasks = myItem;
  }

  public remove( id ){
    
    this.tasks = this.tasks.filter(function( obj ) {
        return obj.id !== id;
    })
    
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

}

class Task{
  id:Number;
  projectName;
  nameTask;
  time;

}
