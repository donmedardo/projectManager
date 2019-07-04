import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskUpdateComponent } from './task/task-update.component';

// @Injectable({ providedIn: 'root' })
// export class TaskResolve implements Resolve<any> {
//     constructor() {}

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const result = route.params['id'] ? route.params['id'] : null;
//         console.info(result);
//         return result;
//     }
// }


const routes: Routes = [{ path: '', component: TaskComponent }, 
                        { path: 'taskUpdate/new', component: TaskUpdateComponent },
                        { path: 'taskUpdate', component: TaskUpdateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
