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
    this.tasks = myItem;
  }

}

class Task{
  projectName;
  nameTask;
  time;

}
