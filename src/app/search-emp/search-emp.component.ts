import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

  empName=""

  constructor(private api:ApiServiceService){}

  readValue=()=>{
    let data:any={
      "empName":this.empName
    }
    this.api.searchEmp(data).subscribe(
      (response)=>{
        console.log(response)
        this.result=response
        if (this.result.length==0) {
          alert("Employee Not found")
          this.empName=""
          
        } 
      }
    )
  }
  result:any=[]

  deleteBtnClick=(id:any)=>{
    let data:any={
      "id":id
    }
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("deleted successfully")
          window.location.reload()
          
        } else {
          alert("oops!something went wrong")
          
        }
      }
    )
  }

}
