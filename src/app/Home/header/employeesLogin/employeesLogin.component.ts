import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { EmployeesService } from 'src/app/Services/Employees/Employees.service';
import { EmployeesLoginService } from 'src/app/Services/employeesLogin/employeesLogin.service';

@Component({
  selector: 'app-employeesLogin',
  templateUrl: './employeesLogin.component.html',
  styleUrls: ['./employeesLogin.component.css']
})
export class EmployeesLoginComponent implements OnInit {
  @Input() scrolled:boolean
  isVisible:boolean = false;
  login?:object
  validateForm!: FormGroup;
  isLoading : boolean = false;
  constructor(private fb: FormBuilder,private message: NzMessageService,private route:Router,private employeeLogin:EmployeesService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.setCurrentEmployee();
  }

  setCurrentEmployee(){
    const employee = JSON.parse(localStorage.getItem('emp'));
    this.employeeLogin.setCurrentEmployee(employee);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.valid){
      this.isLoading = true;
      this.employeeLogin.Login(this.validateForm.value).subscribe(response=>{
        this.message
      .loading('Loading . . .')
      .onClose!.pipe(
        concatMap(() => this.message.success('Welcome ...').onClose!),    
      )
      .subscribe(() => {
        this.isLoading = false
        console.log('All completed!');
        this.route.navigate(['/Emp']);
      });    
        console.log(response)
      },err=>{
        console.log(err)
        this.isLoading = false
        this.message.error(err.error, { nzDuration: 2000 })

      })
      }

      /*
      Old without Api was local fake api
      if(this.validateForm.valid){
        this.employeeLogin.postFunction(this.validateForm.value)
      if(this.employeeLogin.loginInfo.length!==0){
        this.message
        .loading('Loading . . .', { nzDuration: 1000 })
        .onClose!.pipe(
          concatMap(() => this.message.success('Welcome ...', { nzDuration: 1000 }).onClose!),
         
        )
        .subscribe(() => {
          console.log('All completed!');
          this.route.navigate(['/Emp']);
        });
        console.log(this.employeeLogin.loginInfo)
      }else{
          this.message.error('إسم المستخدم أو كلمة المرور غير معرفة , يرجى المحاولة مرة أخرى', { nzDuration: 2000 })
      }
        } */
    

  }
}
