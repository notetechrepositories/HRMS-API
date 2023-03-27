import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/Employee';
import { Route, Router } from '@angular/router';
import { ServService } from '../serv.service';
import { UpdateEmployee } from '../UpdateEmployee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  personalInfo=false;
  account=false;
  experiance=false;
  edit=false;
  delete=false;
  employee:any;
  
@Input() selectedEmployee:UpdateEmployee=new UpdateEmployee();
@Input() states:any;
@Input() district:any;
@Output() changeToTableView = new EventEmitter();
@Output() SeletectedState = new EventEmitter();
 
constructor(private router:Router,private empService:ServService){}
OnInit(){
  
}
changePersonalInfo(){
  this.personalInfo=true;
  this.account=false;
  this.experiance=false;
  this.edit=false;

}
changeAccount(){
  this.personalInfo=false;
  this.account=true;
  this.experiance=false;
  this.edit=false;
}
changeExperiance(){
  this.personalInfo=false;
  this.account=false;
  this.experiance=true;
  this.edit=false;
}
editPersonalInfo(){
   this.personalInfo=false;
  this.account=false;
  this.experiance=false;
  this.edit=true;
}
deletePersonalInfo(id:number){
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.empService.deleteEmployee(id).subscribe((res: number) => {
        if (res > 0) {
          // const index = this.employee.findIndex((emp) => emp.id === id);
          // this.employee.splice(index, 1);
          Swal.fire('Deleted!', 'The employee has been deleted.', 'success');
        }
      });
    }
  });
}

editEmployeeForm(employee:Employee){}
goToPage(pageName:any){this.router.navigate([`${pageName}`])}

selectdistrict(val:any){
  this.SeletectedState=val;
  this.getdistrict(this.SeletectedState)
    
}
getdistrict(val:any){
  this.empService.getdistrict(val).subscribe((res)=>{
    this.district= res;
  })
}

UpdateEmployeeForm(employee:UpdateEmployee){
  employee.id=this.selectedEmployee.id
  console.log(this.selectedEmployee.id)
  console.log(employee)
  this.empService.updateemployee(employee).subscribe((res)=>{
    this.employee=res;
    console.log(res)
  })
}


}
