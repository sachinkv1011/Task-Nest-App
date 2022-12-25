import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.username,
      "passoword":this.password
    }
    console.log(data)
    if (this.username=="admin" && this.password=="12345") {
      alert("login successful")
      
      
    } else {
      alert("oops! something went wrong")
      
    }
  }

}
