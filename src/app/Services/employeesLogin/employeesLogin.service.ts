import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { pipe, ReplaySubject } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { Expenses } from 'src/app/Classes/expenses';
import { Login } from 'src/app/Classes/login';
import { EmployeesLogin } from 'src/app/_Models/employeesLogin';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesLoginService {

  baseUrl = 'https://localhost:5001/api/'
  private currentEmployeeSource = new ReplaySubject<EmployeesLogin>(1);
  currentEmployee$ = this.currentEmployeeSource.asObservable();
constructor(private http:HttpClient,public router: Router,private message: NzMessageService) { }

Login(model:any)
{
  return this.http.post(this.baseUrl + 'account/login',model).pipe(
    map((response:EmployeesLogin)=>{
      const employee = response;

      if(employee){
        localStorage.setItem('emp',JSON.stringify(employee));
        this.currentEmployeeSource.next(employee)
      }
    })
  )
}

setCurrentEmployee(employee:EmployeesLogin){
  this.currentEmployeeSource.next(employee)
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

/*
Old without api was fake api
constructor(private dataFromServer:BackEndService,public router: Router) { }
loginInfo?: Array<Login> = this.dataFromServer.employeeLogin;

  postFunction({username,password}){
    this.dataFromServer.searchForLogin(username,password); 
  }

  employeeLogout(){
    this.dataFromServer.employeeLogout()
    this.router.navigate(['/']);

  } */
}
