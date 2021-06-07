import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { OrdersService } from 'src/app/Services/allOrders/orders.service';
import * as _ from 'lodash'
// for deep copy purposes
//end of deep copy 
@Component({
  selector: 'app-philippinesToggle',
  templateUrl: './philippinesToggle.component.html',
  styleUrls: ['./philippinesToggle.component.css']
})
export class PhilippinesToggleComponent implements OnInit {
  @Input() orderData;
  validateForm!: FormGroup;
  isVisible = false;
  isVisibleDates = false;
  modalOkLoading = false;
  allProceduresStatus=[];
  school?:any
  fingerPrints?:any
  tickets?:any
  options = {
    /* weekday: 'long', */year: 'numeric', month: 'numeric', day: 'numeric',
  };
  optionsTicket = {
    weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  }
  constructor(private Data:OrdersService,private message: NzMessageService,private fb: FormBuilder,) { }

  ngOnInit() {
    console.log(this.orderData)
     // OLD  this.allProceduresStatus = JSON.parse(JSON.stringify(this.orderData.procedures));
     // in this way we made deep copy the difference between this and json parse and stringify is that json will only deep copy string and numbers other types will cause problems this cloneDeep will copy everything even functuions
     this.allProceduresStatus = _.cloneDeep(this.orderData.procedures);

    

    this.validateForm = this.fb.group({ 
      School: [[]],
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
    // [name] because we are taking the object key from the parameter we don't know it thats why we used [] this will accept a variable key or something like that
    this.allProceduresStatus[index][name] = event;    
    if(name!=='school' && name!=='fingerPrint' && name!=='ticket_book'){
    this.allProceduresStatus[index].date.push(new Date());
    }
  }

  handleOk(): void {
    console.log(this.allProceduresStatus)
    this.modalOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
    this.modalOkLoading = false;
    }, 2000);
    this.Data.editStatus(/* this.orderData.client.id, */this.orderData.worker.visa,this.allProceduresStatus)
    this.message
    .loading('Action in progress', { nzDuration: 2500 })
    .onClose!.pipe(
      concatMap(() => this.message.success(`${this.orderData.worker.fullName} Status Has Changed`, { nzDuration: 3000 }).onClose!),
    )
    .subscribe(() => {
      console.log(this.orderData.procedures[2].date[0])
      console.log('All completed!');
    });
  }

  // Date Functions 

  handleCancelDates(): void {
    console.log('Button cancel clicked!');
    this.isVisibleDates = false;
    this.message.error('Dates Changes Cancelled');
  }

  submitForm(): void {
    console.log(this.school)
    if(this.school!==undefined && this.allProceduresStatus[4].date.length===0){
      setTimeout(() => {
        this.allProceduresStatus[4].date.push(this?.school[0])
        this.allProceduresStatus[4].date.push(this?.school[1])
      }, 2000);   
    }
    if(this.fingerPrints!==undefined&&this.allProceduresStatus[5].date.length===0){
      setTimeout(() => {
      this.allProceduresStatus[5].date.push(this?.fingerPrints[0])
      this.allProceduresStatus[5].date.push(this?.fingerPrints[1])
    }, 2000); 
    }
      
      if(this.tickets!==undefined&&this.allProceduresStatus[8].date.length===0){
        setTimeout(() => {
      this.allProceduresStatus[8].date.push(this?.tickets)
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
   console.log(this.school)
  }

  onDateOk(result: Date | Date[] | null,name:string): void {
    
    this[name] = result
    console.log(result)
  }


  showModalDates(): void {
    this.isVisibleDates = true;
    
  }
  //End of Dates functions
}
