import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { PickUpService } from 'src/app/Services/workersArrival/pickUp.service';

@Component({
  selector: 'app-arrivalsTable',
  templateUrl: './arrivalsTable.component.html',
  styleUrls: ['./arrivalsTable.component.css']
})
export class ArrivalsTableComponent implements OnInit {

  arrivals?:any
  optionsTicket = {
    weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  }
  constructor(private arrival:PickUpService,private message: NzMessageService) { }

  ngOnInit() {
    // we called the function insted of only getting the data so we can refrsh on every initition;
    this.arrival.refrshArrivals();
    this.arrivals = this.arrival.workers
  }


  pickup(workerVisa:string){
    this.message
           .loading('Action in progress', { nzDuration: 2500 })
           .onClose!.pipe(
             concatMap(() => this.message.success(`تم التحديث`, { nzDuration: 1000 }).onClose!),
           )
           .subscribe(() => {
            const pickerName = JSON.parse(localStorage.getItem('token'))
            console.log(workerVisa)
            this.arrival.pickedUpBy(pickerName.id,workerVisa)
        
            // this one to change the data locally so the change can appers instatly without refresh
            this.arrivals.forEach(e =>{
                if(workerVisa==e.workerVisa){
                  e.pickupStatus = true
                  e.pickedBy = pickerName.id;
                }
            })
            // end 
             console.log('All completed!');
           });
    
  }

}
