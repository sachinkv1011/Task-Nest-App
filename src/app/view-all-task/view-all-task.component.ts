import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-all-task',
  templateUrl: './view-all-task.component.html',
  styleUrls: ['./view-all-task.component.css']
})
export class ViewAllTaskComponent {

    constructor(private api:ApiServiceService){
      this.api.viewAllTask().subscribe(
        (response:any)=>{
          console.log(response)
          this.task=response
        }
      )
    }
    




   task:any=[]

}
