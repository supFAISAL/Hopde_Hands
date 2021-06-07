import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmployeesDataService } from 'src/app/Services/EmployeesData/employeesData.service';
import * as _ from 'lodash'
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { EmployeesService } from 'src/app/Services/Employees/Employees.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employeesAdd',
  templateUrl: './employeesAdd.component.html',
  styleUrls: ['./employeesAdd.component.css']
})
export class EmployeesAddComponent implements OnInit {
  validateForm!: FormGroup;
  isVisible = false;
  employees?:any
  /* formValues={
    fullName: '',
    birthday: null,
    id:null,
    nationality:"",
    status:"",
    jobTitle:"",
    phone:"",
    email:"",
    username:"",
    password:"",
    role:'0'
  } */
  options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  };
  constructor(private fb: FormBuilder,private employeesData:EmployeesDataService,private Emp:EmployeesService,private datePipe: DatePipe,private message: NzMessageService,) { }

  ngOnInit() {
    this.Emp.GetEmployees().subscribe(response =>{

        this.employees = response;
        console.log(response)
    },err=>{
      console.log(err)
    })


    this.employees = _.cloneDeep(this.employeesData.employeesData);

    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]/* ,[this.emailAsyncValidator] */],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      fullName: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      nationality: [null, [Validators.required]],
      id: [null, [Validators.required]/* ,[this.idAsyncValidator] */],
      status: [null, [Validators.required]],
      username: [null, [Validators.required]/* ,[this.userNameAsyncValidator] */],
      phone: [null, [Validators.required]],
      role: [null, [Validators.required]],
      jobtitle: [null, [Validators.required]],



    });
  }

  /*
  
  old without Api was fake api
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      this.isVisible = false;
    }

      //for Atef
      // we included all of submit variables here so if there is an error nothing will happen
      delete this.validateForm.value.checkPassword;
      this.employeesData.postFunction(this.validateForm.value)
      this.isVisible = false;
         this.message
           .loading('Action in progress', { nzDuration: 1500 })
           .onClose!.pipe(
             concatMap(() => this.message.success(`The Office is Added`, { nzDuration: 1500 }).onClose!),
           )
           .subscribe(() => {
             console.log('All completed!');
           });
   
         //After submitting the form inputs will be reset
         this.validateForm.reset();
         for (const key in this.validateForm.controls) {
           this.validateForm.controls[key].markAsPristine();
           this.validateForm.controls[key].updateValueAndValidity();
         }
         //End
         //end of all variables
         console.log(this.employeesData.employeesData)
     
  } */

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      
    }

    if(this.validateForm.valid){
      console.log(this.validateForm.value)
      const apiDate :string = this.datePipe.transform(this.validateForm.value.birthday, 'yyyy-MM-dd');
     // this.formValues.birthday = apiDate.toString();
      const formValues = {
        fullName: this.validateForm.value.fullName,
        birthday: apiDate.toString(),
        Empidentity:this.validateForm.value.id,
        nationality:this.validateForm.value.nationality,
        status:this.validateForm.value.status,
        jobTitle:this.validateForm.value.jobtitle,
        phone:this.validateForm.value.phone,
        email:this.validateForm.value.email,
        username:this.validateForm.value.username,
        password:this.validateForm.value.password,
        role:this.validateForm.value.role
      }
      console.log(formValues)

      this.Emp.Register(formValues).subscribe(response=>{
        this.message
      .loading('Loading . . .')
      .onClose!.pipe(
        concatMap(() => this.message.success('تم تسجيل مستخدم بنجاح',{ nzDuration: 2000 }).onClose!),    
      )
      .subscribe(() => {
        console.log('All completed!');
        this.isVisible = false;
      });    
        console.log(response)
      },err=>{
        console.log(err)
        this.message.error(err.error, { nzDuration: 2000 })

      })

    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

 /* 
 old without api
 
 userNameAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    this.employeesData.confirmUsername(control.value)
  
    setTimeout(() => {
      if (!this.employeesData.usernameValid) {
       // you have to return `{error: true}` to mark it as an error event
       observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  }); */

  /*
  old without Api
  idAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    this.employeesData.confirmId(control.value)
  
    setTimeout(() => {
      if (!this.employeesData.employeeId) {
       // you have to return `{error: true}` to mark it as an error event
       observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

  emailAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    this.employeesData.confirmEmail(control.value)
  
    setTimeout(() => {
      if (!this.employeesData.employeeEmail) {
       // you have to return `{error: true}` to mark it as an error event
       observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  }); */
}
