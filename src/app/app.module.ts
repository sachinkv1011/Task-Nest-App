import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { EmpNavComponent } from './emp-nav/emp-nav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const myRoute:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"addEmployee",component:AddEmployeeComponent
  },
  {
    path:"empLogin",component:EmpLoginComponent
  },
  {
    path:"myProfile",component:MyProfileComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EmpLoginComponent,
    AdminNavComponent,
    EmpNavComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
