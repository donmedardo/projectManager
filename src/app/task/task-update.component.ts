import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map }                from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task:Task=new Task('','','');

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { this.task= new Task('','','');}

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
    if(this.task.id===0){
      this.task.id=myItem.length;
    }else{
     
    for (let index = 0; index < myItem.length; index++) {
      const element = myItem[index];
      if(element.id===this.task.id){
        myItem.splice(index, 1);
      }
      
    }

    }
    
    myItem.push(this.task)
    localStorage.setItem('tasks', JSON.stringify(myItem));
    this.router.navigate(['/']);

  }
  

}


class Task{

  id:Number=0;
  projectName: String;
  nameTask: String;
  time: String;

  constructor(projectName,nameTask,time){
    this.projectName = projectName?projectName:'';
    this.nameTask = nameTask?nameTask:'';
    this.time = time?time:'';
  }
  

}
