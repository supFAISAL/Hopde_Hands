import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { EmployeesService } from 'src/app/Services/Employees/Employees.service';
import { EmployeesLoginService } from 'src/app/Services/employeesLogin/employeesLogin.service';

@Component({
  selector: 'app-employeesPageBuilder',
  templateUrl: './employeesPageBuilder.component.html',
  styleUrls: ['./employeesPageBuilder.component.css']
})
export class EmployeesPageBuilderComponent implements OnInit {

  Users?:any

  constructor(private route:Router,private employeeLog:EmployeesService,private message: NzMessageService) { }

  ngOnInit() {}
  
  LogOut(){
    this.employeeLog.Logout();
  }
}
