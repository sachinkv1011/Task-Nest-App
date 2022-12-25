import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(){}

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
  }

}
