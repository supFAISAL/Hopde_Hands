import { Injectable } from '@angular/core';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class PoloRenewalService {
  poloProcedures = [];

constructor(private dataFromServer:BackEndService) {
  this.dataFromServer.ClientsData.forEach(e=>{
    e.workers.forEach(ele=>{
      this.poloProcedures.push({
        clientName:e.client.fullName,
        workerName:ele.worker.fullName,
        clientPhone:e.client.phone,
        clientPhone2:e.client.phone2,
      }
      )
    })
  })
 }

}
