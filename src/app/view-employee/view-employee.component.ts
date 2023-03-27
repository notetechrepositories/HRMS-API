import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';
import { ServService } from '../serv.service';
import { UpdateEmployee } from '../UpdateEmployee';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
employee: any;
selectedEmployee:UpdateEmployee=new UpdateEmployee();
states:any=[];
district:any=[];
SeletectedState:any;
showEmployeeInfoFull=false;
page="employee-details";
emlpoyee:Employee []=[];
  currentDate:any;
  
constructor(
  private empService:ServService,private datepipe:DatePipe,
  private router:Router){ } 
  ngOnInit(){
    this.getemployee();
    this.getstate();
    this.SeletectedState.any;
  }
getemployee(){
  this.empService.getemployee().subscribe((res)=>{
    this.employee=res;
  })
}
employeeDetails(employee:UpdateEmployee){
this.selectedEmployee=employee;
this.showEmployeeInfoFull=true;
console.log(employee);
}

getstate(){
  
  this.empService.getstate().subscribe((res)=>{
    this.states=res;
    console.log(this.states)
    console.log(res)
  })
}
getdistrict(){
  this.empService.getdistrict(this.SeletectedState).subscribe((res)=>{
    this.district= res;
  })
}
}

