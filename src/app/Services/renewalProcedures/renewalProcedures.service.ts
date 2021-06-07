import { Injectable } from '@angular/core';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class RenewalProceduresService {
  renewalProcedures = [];

constructor(private dataFromServer:BackEndService) {
  this.dataFromServer.ClientsData.forEach(e=>{
    e.workers.forEach(ele=>{
      this.renewalProcedures.push({
        authorizationNumber:ele.contract.authorizationNumber,
        authorizationDate:ele.contract.authorizationDate,
        procedureType:ele.contract.procedureType,
        contractNumber:ele.contract.contractNumber,
        nationality:ele.worker.nationality,
        contractType:ele.contract.contractType,
        contractValue:ele.contract.contractValue,
      }
      )
    })
  })
 }

}
