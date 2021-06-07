import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { Observable, Observer } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ExcelExportService } from 'src/app/Services/Excel/excelExport.service';
// import { MonthlyWorkerExpensesService } from 'src/app/Services/monthlyExpenses/monthlyWorkerExpenses.service';

@Component({
  selector: 'app-monthlyWorkerExpenses',
  templateUrl: './monthlyWorkerExpenses.component.html',
  styleUrls: ['./monthlyWorkerExpenses.component.css']
})
export class MonthlyWorkerExpensesComponent implements OnInit {

  ngOnInit(){

  }
  /* monthlyExpenses?:any
  workerName?:string
  isVisible = false;
  validateForm!: FormGroup;
  excelFileName= 'المصاريف الشهرية للعاملة.xlsx';  
  excelData = [];
  expensesTotal:object;
  currencyOptions = { prefix: ' SAR ', thousands: ',', decimal: '.', inputMode: CurrencyMaskInputMode.NATURAL }
  precentageOptions = { prefix: ' % ', thousands: ',', decimal: '.', inputMode: CurrencyMaskInputMode.FINANCIAL }
  constructor(private fb: FormBuilder,private excelExport:ExcelExportService,private message: NzMessageService,private Expenses:MonthlyWorkerExpensesService) { }

  ngOnInit() {
this.monthlyExpenses = this.Expenses.expenses;
this.validateForm = this.fb.group({
  musandNumber: ['', [Validators.required], [this.musandNumberAsyncValidator]],
  externalOffice: [null, [Validators.required]],
  workerContract: [null, [Validators.required]],
  agency: [null, [Validators.required]],
  send: [null, [Validators.required]],
  generalExpenses: [null, [Validators.required]],
  musandRatio: [null, [Validators.required]],
  workerPickup: [null, [Validators.required]],
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
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

        this.isVisible = false;
      // this is only for demonstration to include the total and show it / it will be deleted when dealing with the backend because it all will be calculated there
      const totalAmount : number = this.validateForm.value.externalOffice + this.validateForm.value.workerContract +
      this.validateForm.value.agency + this.validateForm.value.send +
      this.validateForm.value.generalExpenses + this.validateForm.value.workerPickup;
      console.log(totalAmount);
      this.expensesTotal = {total:totalAmount}
      const fullFormWithTotal = {...this.validateForm.value,...this.expensesTotal}
      this.Expenses.postFunction(fullFormWithTotal)

      this.message
        .loading('Action in progress', { nzDuration: 2500 })
        .onClose!.pipe(
          concatMap(() => this.message.success('تم إضافة التحويل', { nzDuration: 2500 }).onClose!),
        )
        .subscribe(() => {
          // to update the Data locally
          this.monthlyExpenses = [...this.Expenses.expenses]   
          //end
          console.log('All completed!');
          console.log(this.monthlyExpenses)
        });
        this.validateForm.reset();
        
        
    
  }

  musandNumberAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      this.Expenses.searchWorker(control.value)
      

        if(this.Expenses.targetedWorker!==undefined){
          this.workerName = this.Expenses.targetedWorker;       
        }
        
      setTimeout(() => {
        if (this.Expenses.targetedWorker==undefined) {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, notFound: true });
        } else {
          
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

    exportingExcel(){
      this.monthlyExpenses.forEach(data => {
       this.excelData.push({ 'رقم مساند':data.musandNumber,
       'تكلفة المكتب الخارجي': data.externalOffice.toLocaleString('en'),
       'عقد العاملة':data.workerContract.toLocaleString('en'),
       'وكالة':data.agency.toLocaleString('en'),
       'إرسال':data.send.toLocaleString('en'),
       'مصاريف عامة':data.generalExpenses.toLocaleString('en'),
       'نسبة مساند':data.musandRatio.toLocaleString('en'),
       'إستلام العاملة':data.workerPickup.toLocaleString('en'),
       })
      
     });
     this.excelExport.exportAsExcel({data:this.excelData,fileName:this.excelFileName})
     //this one to clear the data after the download because if we didn't and the user clicked print excel twice at tthe same time the data will be dublicated;
     this.excelData.length = 0;
     //end
   }
}
 */
}