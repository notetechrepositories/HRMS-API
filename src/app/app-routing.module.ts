import  { Component, NgModule} from '@angular/core'
import { Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'view-employee',component:ViewEmployeeComponent},
    {path:'employee-details',component:EmployeeDetailsComponent}
]

@NgModule({
    imports :[
        RouterModule.forRoot(routes,{
            useHash : false
        })
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{
    
}