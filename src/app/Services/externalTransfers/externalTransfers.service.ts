import { Injectable } from '@angular/core';
import { ExternalTransfers } from 'src/app/Classes/externalTransfers';
import { Offices } from 'src/app/Classes/offices';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class ExternalTransfersService {
  constructor(private dataFromServer:BackEndService) { }
  transfers?: Array<ExternalTransfers> = this.dataFromServer.externalTransfers;
  
  postFunction(transfer){
    this.dataFromServer.externalTransfers.push(transfer)
  
    console.log(this.transfers)
  
  }
  
  delete(ref:any) {
    this.dataFromServer.externalTransfers.forEach((element,index)=>{
      if(element.refrence===ref) this.dataFromServer.externalTransfers.splice(index,1);
   });
    console.log(this.dataFromServer.expenses)
  }

}
