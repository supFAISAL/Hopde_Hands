import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ClientsService } from 'src/app/Services/Clients/clients.service';
import { concatMap } from 'rxjs/operators';
import { Emitters } from 'src/app/Emitters/emitters';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/Services/Employees/Employees.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showResult : boolean = false;
  isLoading : boolean = false;
  Scrolled : boolean = false
  showClientLogin: boolean  = false
  ShowTheButton: boolean  = true
  validateForm!: FormGroup;
  clientName?:any;
  // we need to change this
  availableData = this.clientData.clientData;
  screenWidth?:any
  authanticated?:boolean
  employeeName?:string
  constructor(private fb: FormBuilder,private message: NzMessageService,private clientData:ClientsService,private route:Router,public emp:EmployeesService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > 300;
  
      if (scrolled) {
        this.Scrolled=true
      } else {
        this.Scrolled=scrolled
      }
    });

    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
    });

    if(localStorage.getItem('emp')){
      /* if we want to instantly redirect to employee page 
      this.route.navigate(['/Emp']); */
      this.authanticated = true
    }else{
      this.authanticated = false
    }
    console.log(localStorage.getItem('token'))

  }

  ClientLogin() {

    this.showClientLogin = true;
    this.ShowTheButton = false;
    var removeButton = document.getElementById("ButtonToRemove");
    removeButton.remove()
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      this.clientData.postFunction(this.validateForm.value.id);
    if(this.clientData.clientData.length!==0){
      this.message
      .loading('جاري التأكيد', { nzDuration: 1000 })
      .onClose!.pipe(
        concatMap(() => this.message.success('تم التأكيد', { nzDuration: 1000 }).onClose!),
       
      )
      .subscribe(() => {
        console.log('All completed!');
        this.showResult=true
        this.clientName = this.clientData.clientData[0].client.fullName


        /* 
        for decode the string to multiable index then displaying the first two names which pop will do is to delete starting from the last index 
        - first thinkg we convert the string to array using spilit and the (" ") means spilit by space
        - then we deleted index starting from the last
        - then we used .join to tranform the array into string and the (" ") we told him to seperate each index with space.
        this.clientName = this.clientData.clientData[0].client.fullName.split(" ");

        and there is splice like this  this.clientName.splice(2,1); the first number tell the index the second how many to remove starting from there that what i understood
        console.log(this.clientName)
        
        
        while(this.clientName.length!==2){
          
            this.clientName.pop();
          
        }

        this.clientName = (this.clientName.join(" ")) */

      });
    }else{
        this.message.error('رقم الهوية غير معرف , يرجى المحاولة مرة أخرى', { nzDuration: 2000 })
    }
      }
  }

  clientLogOut(){
    //After submitting the form inputs will be reset
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    this.clientData.clientLogout();
    this.showResult = false;
    this.ShowTheButton = true
      this.message.success('تم تسجيل الخروج', { nzDuration: 1000 })
  
    }, 2000);
    
  }

}
