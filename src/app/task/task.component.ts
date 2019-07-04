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
    this.tasks =[{'projectName':'test','nameTask':'task','time':12}]
  }

}

class Task{
  projectName;
  nameTask;
  time;

}
