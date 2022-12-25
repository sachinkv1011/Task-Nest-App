import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {
  constructor(private api:ApiServiceService,private route:Router){}

  username=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    this.api.empLogin(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          localStorage.setItem("userInfo",response.userId)
          alert("Access Granted..")

          this.route.navigate(['/myProfile'])
          
        } else {
          alert("oops! something went wrong...")
          
        }
      }
    )
  }

}
