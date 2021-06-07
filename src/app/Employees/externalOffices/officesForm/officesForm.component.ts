import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { OfficesService } from 'src/app/Services/Offices/offices.service';

@Component({
  selector: 'app-officesForm',
  templateUrl: './officesForm.component.html',
  styleUrls: ['./officesForm.component.css']
})
export class OfficesFormComponent implements OnInit {
  validateForm!: FormGroup;
  isVisible = false;
  constructor(private fb: FormBuilder,private message: NzMessageService,private offices:OfficesService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      office: [null, [Validators.required]],
      country: [null, [Validators.required]],
      commercialRegistrationNo: [null, [Validators.required]],
      coordinatorName: [null, [Validators.required]],
      coordinatorNumber: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: ["external-office", [Validators.required]],

        });
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
  submitForm() {
    // For Client values validate
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      //for Atef
      // we included all of submit variables here so if there is an error nothing will happen
      this.offices.postFunction(this.validateForm.value)
      this.isVisible = false;
         this.message
           .loading('Action in progress', { nzDuration: 2500 })
           .onClose!.pipe(
             concatMap(() => this.message.success(`The Office is Added`, { nzDuration: 2500 }).onClose!),
           )
           .subscribe(() => {
             console.log('All completed!');
           });
   
         console.log(this.validateForm.value)
         //After submitting the form inputs will be reset
         this.validateForm.reset();
         for (const key in this.validateForm.controls) {
           this.validateForm.controls[key].markAsPristine();
           this.validateForm.controls[key].updateValueAndValidity();
         }
         //End
         //end of all variables
     
    }
   
  }
}
