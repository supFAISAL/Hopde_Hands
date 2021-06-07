import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { concatMap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ExpensesService } from 'src/app/Services/Expenses/expenses.service';
import { CurrencyMaskInputMode } from 'ngx-currency';

@Component({
  selector: 'app-Exepenses',
  templateUrl: './Exepenses.component.html',
  styleUrls: ['./Exepenses.component.css']
})
export class ExepensesComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;
  inputValue?: string;
  expensesData!:any
  Refrence?:object
  options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  };
  currencyOptions = { prefix: ' SAR ', thousands: ',', decimal: '.', inputMode: CurrencyMaskInputMode.NATURAL }
  //This will create a random refrence number that will be merged with the from values the first number (100000000) is the lengh where the 1 is to make sure the random never will never start with 0 and the zero's the randoms
  constructor(private fb: FormBuilder,private allExpenses:ExpensesService,private message: NzMessageService) { }

  ngOnInit() {
    console.log('hi')
    this.expensesData = this.allExpenses.expensesData;
    this.validateForm = this.fb.group({
      date: [null, [Validators.required]],
      invoiceNum: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      description: [null, [Validators.required]],
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
      this.Refrence = {refrence: Math.floor(100000000 + Math.random() * 900000),};
      this.isVisible = false;
      // here we merged the refrence number with the form values so we can be able to match the table rows 
      const refrenceWithForm = {...this.validateForm.value,...this.Refrence}
      this.allExpenses.postFunction(refrenceWithForm)
      this.message
        .loading('Action in progress', { nzDuration: 2000 })
        .onClose!.pipe(
          concatMap(() => this.message.success('تم إضافة الصرفية', { nzDuration: 1500 }).onClose!),
        )
        .subscribe(() => {
          // to update the Data locally
          this.expensesData = [...this.allExpenses.expensesData]   
          //end
          console.log('All completed!');
        });

      console.log(refrenceWithForm)
      //After submitting the form inputs will be reset
      this.validateForm.reset();
      for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
}
delete(refrence:number): void {

  //this one to delete the Service Data tried it but since we take our data from listofdata variables nothing will change untill we refresh
  this.allExpenses.delete(refrence)
  this.message
  .loading('جاري حذف الصرفية', { nzDuration: 2500 })
  .onClose!.pipe(
    concatMap(() => this.message.success('تم حذف الصرفية', { nzDuration: 1000 }).onClose!),
    
  )
  .subscribe(() => {
    console.log('All completed!');
    // deleting the data locally (for froned the first line were for backend delete)
    this.expensesData = this.expensesData.filter(e => e.refrence !==refrence)
  });
  //End of deleting the service data
}
}
