import { Injectable } from '@angular/core';
import { BackEndService } from '../backEndACT/backEnd.service';
import { Employees } from 'src/app/Classes/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

constructor(private dataFromServer:BackEndService) { }
employeesData?: Array<Employees> = this.dataFromServer.employeesData;
usernameValid?:boolean;
employeeId?:boolean
employeeEmail?:boolean

postFunction(employee){
  this.dataFromServer.employeesData.push(employee)


}

confirmUsername(username:string){
  this.usernameValid = true;
  this.dataFromServer.employeesData.forEach(el=>{
    if(username===el.username){
      this.usernameValid = false
    }
  })

}

confirmId(id:number){
  this.employeeId = true;
  this.dataFromServer.employeesData.forEach(el=>{
    if(id==el.id){
      this.employeeId = false
    }
  })

}

confirmEmail(email:string){
  this.employeeEmail = true;
  this.dataFromServer.employeesData.forEach(el=>{
    if(email===el.email){
      this.employeeEmail = false
    }
  })

}

}
