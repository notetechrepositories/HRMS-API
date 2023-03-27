import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/Employee';
import { UpdateEmployee } from './UpdateEmployee';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  

  constructor(private http:HttpClient) { }
  postEmployee(data:any){
    return this.http.post<any>("https://localhost:7078/api/employee",data);
    
  }
  getstate(){
    console.log();
    return this.http.get<any>("https://localhost:7078/api/employee/State");
  }
  getdistrict(data:any){
    console.log(data);
    const url=`https://localhost:7078/api/employee/District?id=${data}`
    return this.http.get<any>(url);
   
  }
  getdepartment(){
    return this.http.get<any>("https://localhost:7078/api/employee/Department");
  }
getdesignation(data:any){
  console.log(data);
  const url=`https://localhost:7078/api/employee/Designation?id=${data}`
  return this.http.get<any>(url);
 
}
getemployee(){
  return this.http.get<any>("https://localhost:7078/api/employee/get-employees");
}
updateemployee(data:UpdateEmployee){
  console.log(data.id)
  const url=`https://localhost:7078/api/employee/${data.id}`
  return this.http.put<any>(url,data);
}
deleteEmployee(id:number){
  console.log(id)
  const url=`https://localhost:7078/api/employee/${id}`
  return this.http.put<number>(url,id);
}
}
