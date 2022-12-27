import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private api:ApiServiceService){}

  taskTitle = ""
  // assignDate = ""
  taskDueDate ="" 
  remarks = ""
  status = ""
  empId = ""

  readValue=()=>{
    let data:any={
      "empId":this.empId,
      "taskTitle":this.taskTitle,
      "taskDueDate":this.taskDueDate,
      "remarks":this.remarks,
      "status":this.status     
    }
    this.api.addTask(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Task added successfully")
          
        } else {
          alert("oops! something went wrong")
          
        }
      }
    )
    
  }

}
