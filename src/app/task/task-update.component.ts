import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map }                from 'rxjs/operators';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task:Task;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .queryParamMap.subscribe(params=>{
        console.info (params.get('task')) 
        this.task = JSON.parse(params.get('task'))
      } )
    //   .pipe(map(params => 
    //     params.get('task') || 'None'));

     
    // this.activatedRoute.data.subscribe(({ task }) => {
    //     console.info(task)
    //     this.task = task;
    // });
  }

}

class Task{
  projectName;
  nameTask;
  time;

}
