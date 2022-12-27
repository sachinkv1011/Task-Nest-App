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
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewAllTaskComponent } from './view-all-task/view-all-task.component';
import { MyTaskComponent } from './my-task/my-task.component';

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
  },
  {
    path:"searchEmp",component:SearchEmpComponent
  },
  {
    path:"addTask",component:AddTaskComponent
  },
  {
    path:"viewAllTask",component:ViewAllTaskComponent
  },
  {
    path:"myTask",component:MyTaskComponent 
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
    MyProfileComponent,
    SearchEmpComponent,
    AddTaskComponent,
    ViewAllTaskComponent,
    MyTaskComponent
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
