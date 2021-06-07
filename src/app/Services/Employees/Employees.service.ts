import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ReplaySubject } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { EmployeesLogin } from 'src/app/_Models/employeesLogin';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
baseUrl = "https://localhost:5001/api/"
private currentEmployeeSource = new ReplaySubject<EmployeesLogin>(1)
currentEmployee$ = this.currentEmployeeSource.asObservable();
constructor(private http:HttpClient,private message: NzMessageService,private router: Router) { }
  Login(model:any){
    return this.http.post(this.baseUrl+'account/login',model).pipe(
      map((response:EmployeesLogin)=>{
        const employee = response;

        if(employee){
          localStorage.setItem('emp',JSON.stringify(employee));
          this.currentEmployeeSource.next(employee)
          
        }
      })
    )
  }

  Register(model:any){

    return this.http.post(this.baseUrl+"account/register",model)
  }

  GetEmployees(){
    return this.http.get(this.baseUrl+"employees");
  }

  setCurrentEmployee(employee:EmployeesLogin){

    this.currentEmployeeSource.next(employee);
  }

  Logout(){
    this.message
  .loading('Loggin out . . . ', { nzDuration: 1000 })
  .onClose!.pipe(
    concatMap(() => this.message.success('Logged Out', { nzDuration: 1000 }).onClose!),
   
  )
  .subscribe(() => {
  /*
  old we need to update this
  this.employeeLog.employeeLogout() */

  localStorage.removeItem('emp')
    this.currentEmployeeSource.next(null);
  this.router.navigate(['/']);
    console.log('All completed!');
  });
  }

}
