import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { concatMap } from 'rxjs/operators';
import { ExternalTransfersService } from 'src/app/Services/externalTransfers/externalTransfers.service';
import { OfficesService } from 'src/app/Services/Offices/offices.service';

@Component({
  selector: 'app-externalTransfers',
  templateUrl: './externalTransfers.component.html',
  styleUrls: ['./externalTransfers.component.css']
})
export class ExternalTransfersComponent implements OnInit {
  Refrence?:object
  isVisible = false;
  validateForm!: FormGroup;
  result:number;
  inputValue?: string;
  filteredOptions: string[] = [];
  optionsOffices = [];
  officesData = [];
  selectedOffices =[];
  transfers?:any
  offices?:any
  options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  };
  currencyOptions = { prefix: ' SAR ', thousands: ',', decimal: '.', inputMode: CurrencyMaskInputMode.NATURAL }
  currencyOptionsDollar = { prefix: ' USD ', thousands: ',', decimal: '.', inputMode: CurrencyMaskInputMode.NATURAL }
  constructor(private fb: FormBuilder,private message: NzMessageService,private Transfers:ExternalTransfersService,private Offices:OfficesService) { }

  ngOnInit() {
    this.Offices.offices.forEach(office =>{
      this.officesData.push(office.office)
    })
    console.log(this.selectedOffices)
    this.transfers = this.Transfers.transfers;
    this.offices = this.Offices.offices
    
    this.validateForm = this.fb.group({
      office: [null, [Validators.required]],
      date: [null, [Validators.required]],
      invoiceNum: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      amountDollar: [null, [Validators.required]],
      description: [null, [Validators.required]],
        });

        this.validateForm.controls['amountDollar'].disable();
        // this for making the office input have selectable items so we can pick from the exact name as database
        this.offices.forEach(element => {
          this.optionsOffices.push(element.office);
        });
        //end
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
      this.validateForm.value.amountDollar = this.result;
      // here we merged the refrence number with the form values so we can be able to match the table rows 
      const refrenceWithForm = {...this.validateForm.value,...this.Refrence}
      this.Transfers.postFunction(refrenceWithForm);

      this.message
        .loading('Action in progress', { nzDuration: 2500 })
        .onClose!.pipe(
          concatMap(() => this.message.success('تم إضافة التحويل', { nzDuration: 2500 }).onClose!),
        )
        .subscribe(() => {
          // to update the Data locally
          this.transfers = [...this.Transfers.transfers]   
          //end
          console.log('All completed!');
        });

      console.log(refrenceWithForm)
      console.log(this.validateForm.value.amount)
      //After submitting the form inputs will be reset
      this.validateForm.reset();
      for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
}

onChange(value: string): void {
  this.filteredOptions = this.optionsOffices.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
changeResult(valueInRiyal:any){
  this.result = valueInRiyal * 3.76;
}
delete(refrence:number): void {

  //this one to delete the Service Data tried it but since we take our data from listofdata variables nothing will change untill we refresh
  this.Transfers.delete(refrence)
  this.message
  .loading('جاري حذف الصرفية', { nzDuration: 2500 })
  .onClose!.pipe(
    concatMap(() => this.message.success('تم حذف الصرفية', { nzDuration: 1000 }).onClose!),
    
  )
  .subscribe(() => {
    console.log('All completed!');
    // deleting the data locally (for froned the first line were for backend delete)
    this.transfers = this.transfers.filter(e => e.refrence !==refrence)
  });
  //End of deleting the service data
}

}
