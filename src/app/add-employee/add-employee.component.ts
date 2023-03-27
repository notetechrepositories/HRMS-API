import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  users:any;
  states:any=[];
  district:any=[];
  departments: any=[] ;
  designation :any=[] ;
  emoloyeeId=0;
  selctedstate:any;
  currentDate:any;
  home="home";
 employee:Employee =new Employee();
  constructor(
    private empService:ServService,
    private datepipe:DatePipe,
    private router:Router)
    {
        let currentDateTime =this.datepipe.transform((new Date),'yyyy-MM-ddThh:mm:ss')
        this.currentDate=currentDateTime;
    
  } 
  
  ngOnInit(){
    this.getdepartment();
    this.getstate();
    this.employee.created_date=this.currentDate;
  }
  getUserForm(data:any){
   this.empService.postEmployee(this.employee).subscribe((res)=>{
    this.emoloyeeId=res;
    if(this.emoloyeeId!=null){

      Swal.fire("Successfuly Added!", "", "success");
      this.router.navigate([`${this.home}`])
    }

    console.log(res);
   })
   }
  getstate(){
    this.empService.getstate().subscribe((res)=>{
      this.states=res;
    })
  }
  getdistrict(){
    this.empService.getdistrict(this.selctedstate).subscribe((res)=>{
      this.district= res;
    })
  }
  selectdistrict(val:any){
    this.selctedstate=val;
    this.getdistrict();
  }
  getdepartment() {
    this.empService.getdepartment().subscribe((res)=>{
      this.departments=res;
    })
  }

  selecteddepartment(val:any){
    this.empService.getdesignation(val).subscribe((res)=>{
      this.designation=res;
    })
  }
}
