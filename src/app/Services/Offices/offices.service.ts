import { Injectable } from '@angular/core';
import { Offices } from 'src/app/Classes/offices';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  
  constructor(private dataFromServer:BackEndService) { }
  offices?: Array<Offices> = this.dataFromServer.Offices;
  
  postFunction(office){
    this.dataFromServer.Offices.push(office)
  
    console.log(this.offices)
  
  }
  
  delete(id:any) {
    this.dataFromServer.Offices.forEach((element,index)=>{
      if(element.id===id) this.dataFromServer.Offices.splice(index,1);
   });
    console.log(this.dataFromServer.expenses)
  }

}
