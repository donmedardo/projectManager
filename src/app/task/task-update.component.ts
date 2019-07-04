import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map }                from 'rxjs/operators';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task:Task=new Task('','','');

  constructor(private activatedRoute: ActivatedRoute) { this.task= new Task('','','');}

  ngOnInit() {
    this.task= new Task('','','');
    this.activatedRoute
      .queryParamMap.subscribe(params=>{
        console.info (params.get('task')) 
        if(params.get('task')){
            this.task = JSON.parse(params.get('task'))
        }
      } )
    
  }

  public save(){
    let myItem:Task[] = localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')):[];

    myItem.push(this.task)
    localStorage.setItem('tasks', JSON.stringify(myItem));

  }

}

class Task{

  projectName: String;
  nameTask: String;
  time: String;

  constructor(projectName,nameTask,time){
    this.projectName = projectName?projectName:'';
    this.nameTask = nameTask?nameTask:'';
    this.time = time?time:'';
  }
  

}
