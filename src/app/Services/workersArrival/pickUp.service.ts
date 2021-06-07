import { Injectable } from '@angular/core';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class PickUpService {
workers = [];
constructor(private dataFromServer:BackEndService) {
 
 }

 refrshArrivals(){
   this.workers.length = 0;
  this.dataFromServer.ClientsData.forEach(e => {
    e.workers.forEach(ele =>{
      const indexofTicket = ele.procedures.length;
      // this conditions to only post data of confirmed ticket
      if(ele.procedures[indexofTicket - 1].ticket_book){
      this.workers.push(
        {workerName:ele.worker.fullName,
          workerVisa:ele.worker.visa,
          pickupStatus:ele.worker.pickUp.status,
          pickedBy:ele.worker.pickUp.by,
          workerArrival:ele.procedures[indexofTicket - 1].date[0],
           clientName:e.client.fullName,
           clientPhone:e.client.phone

          }
          );
        }
      console.log(this.workers)
    })
  })
 }

pickedUpBy(pickerId:number,workerVisa:any){
  this.dataFromServer.ClientsData.forEach(e =>{
    e.workers.forEach(ele =>{
      if(workerVisa==ele.worker.visa){
        ele.worker.pickUp.status = true
        ele.worker.pickUp.by = pickerId;
        console.log(this.dataFromServer.ClientsData)
      }
    })
  })
}
}
