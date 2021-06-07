import { Component, OnInit } from '@angular/core';
import { EmployeesLoginService } from './Services/employeesLogin/employeesLogin.service';
import { EmployeesLogin } from './_Models/employeesLogin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hope-hands';

  constructor(){}

}
