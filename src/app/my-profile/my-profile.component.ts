import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  userId:any="" 
  constructor(private api:ApiServiceService){
    this.userId=localStorage.getItem("userInfo")
    let data1:any={
      "id":this.userId
    }
    this.api.viewMyProfile(data1).subscribe(
      (response:any)=>{
        this.data=response
        console.log(this.data)
        localStorage.setItem("new",this.data[0].empCode)
       
      }
    )
  }
 
data:any=[]
}
