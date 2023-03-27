import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // constructor(private getApi:ApiCallService){}
  // public postArray=[]
  // ngOnInit(){
  //   this.getApi.getPost().subscribe((res) => {
  //     this.postArray=res
 
      
  //     console.log(res)

     
  //   })
  // }
  
}
