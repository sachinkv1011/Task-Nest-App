import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent {
  userData:any=""
  status=""
  // empId=""

  
  constructor(private api:ApiServiceService){
    this.userData=localStorage.getItem("new")
    let data:any={
      "empId":this.userData
    }
    this.api.viewMyTask(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data1=response
        console.log(this.data1)
      }
    )
  }

  data1:any=[]

  
    
  

  function1=()=>{
   
    let update:any={
      "status":"completed",
      "empId":this.userData
    }
    this.api.updateStatus(update).subscribe(
      (response:any)=>{
        console.log(response)
        window.location.reload()

      }
    )

  }
  function2=()=>{
   
    let update:any={
      "status":"processing",
      "empId":this.userData
    }
    this.api.updateStatus(update).subscribe(
      (response:any)=>{
        console.log(response)
        window.location.reload()

      }
    )

  }
  function3=()=>{
   
    let update:any={
      "status":"I can't",
      "empId":this.userData
    }
    this.api.updateStatus(update).subscribe(
      (response:any)=>{
        console.log(response)
        window.location.reload()

      }
    )

  }

}
