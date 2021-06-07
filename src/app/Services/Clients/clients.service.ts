import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientInformations } from 'src/app/Classes/clientInformations';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
constructor(private dataFromServer:BackEndService) { }
  
  clientData?: Array<ClientInformations> = this.dataFromServer.requstedData;
  

  postFunction(id:number){

    this.dataFromServer.searchForClientData(id); 


  }

  clientLogout(){
    this.clientData.length = 0;
  }
  
}
