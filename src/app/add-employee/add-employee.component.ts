import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private api:ApiServiceService){}

  empCode=""
  empName=""
  empEmail=""
  empPhone=""
  designation=""
  empSalary=""
  username=""
  password=""

  readValue=()=>{
    let data:any={
      "empCode":this.empCode,
      "empName":this.empName,
      "empEmail":this.empEmail,
      "empPhone":this.empPhone,
      "designation":this.designation,
      "empSalary":this.empSalary,
      "username":this.username,
      "password":this.password

    }
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Exployee added successfully!")
          this.empCode=""
          this.empName=""
          this.empEmail=""
          this.empPhone=""
          this.designation=""
          this.empSalary=""
          this.username=""
          this.password=""
          
        } else {
          alert("öops! something went wrong")
          
        }
      }
    )
  }

}
