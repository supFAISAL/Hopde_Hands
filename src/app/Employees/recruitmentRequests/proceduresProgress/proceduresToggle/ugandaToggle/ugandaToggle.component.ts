import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { OrdersService } from 'src/app/Services/allOrders/orders.service';
import * as _ from 'lodash'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ugandaToggle',
  templateUrl: './ugandaToggle.component.html',
  styleUrls: ['./ugandaToggle.component.css']
})
export class UgandaToggleComponent implements OnInit {
  @Input() orderData;
  isVisible = false;
  modalOkLoading = false;
  isVisibleDates = false;
  validateForm!: FormGroup;
  fingerPrints?:any
  tickets?:any
  allProceduresStatus = [];
  options = {
    /* weekday: 'long', */year: 'numeric', month: 'numeric', day: 'numeric',
  };
  optionsTicket = {
    weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  }
  constructor(private Data:OrdersService,private message: NzMessageService,private fb: FormBuilder) { }

  ngOnInit() {
    this.allProceduresStatus = _.cloneDeep(this.orderData.procedures);
    
    this.validateForm = this.fb.group({ 
      FingerPrints: [[]],
      tickets:[[]],

    });

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    // this one to reset dates after hitting cancel what we did is we copied the data again from what we have recived;
    this.allProceduresStatus = _.cloneDeep(this.orderData.procedures);
  }

  changeSwitch(event,name:string,index:number): void {

    this.allProceduresStatus[index][name] = event;
    if(name!=='fingerPrint' && name!=='ticket_book'){
      this.allProceduresStatus[index].date.push(new Date());
      }
  }

  handleOk(): void {
    this.modalOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
    this.modalOkLoading = false;
    }, 2000);
    this.Data.editStatus(this.orderData.worker.visa,this.allProceduresStatus)
    this.message
    .loading('Action in progress', { nzDuration: 2500 })
    .onClose!.pipe(
      concatMap(() => this.message.success(`${this.orderData.worker.fullName} Status Has Changed`, { nzDuration: 3000 }).onClose!),
    )
    .subscribe(() => {
      console.log('All completed!');
    });
    console.log(this.Data.allOrders)
  }
  handleCancelDates(): void {
    console.log('Button cancel clicked!');
    this.isVisibleDates = false;
    this.message.error('Dates Changes Cancelled');
  }
  showModalDates(): void {
    this.isVisibleDates = true;
    
  }

  submitForm(): void {
    if(this.fingerPrints!==undefined&&this.allProceduresStatus[4].date.length===0){
      setTimeout(() => {
      this.allProceduresStatus[4].date.push(this?.fingerPrints[0])
      this.allProceduresStatus[4].date.push(this?.fingerPrints[1])
    }, 2000); 
    }
      
      if(this.tickets!==undefined&&this.allProceduresStatus[6].date.length===0){
        setTimeout(() => {
      this.allProceduresStatus[6].date.push(this?.tickets)
    }, 2000); 
      }
      this.message
      .loading('Action in progress', { nzDuration: 2000 })
      .onClose!.pipe(
        concatMap(() => this.message.success("Date Changes Has Been Applied", { nzDuration: 2000 }).onClose!),
      )
      .subscribe(() => {
    this.isVisibleDates = false;
        console.log('All completed!');
      });
      
      
    }

    onDateChange(result:Date,name:string): void {
    
      this[name] = result
     }

     onDateOk(result: Date | Date[] | null,name:string): void {
    
      this[name] = result
    }
}
