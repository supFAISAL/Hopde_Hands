import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeesService } from '../Services/Employees/Employees.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private emp:EmployeesService,private route:Router){}
  canActivate(): Observable<boolean>{
    return this.emp.currentEmployee$.pipe(
      map(employee=>{
        if(employee) return true;
      })
    )
  }
  
}
