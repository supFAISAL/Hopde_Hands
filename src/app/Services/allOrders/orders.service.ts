import { Injectable } from '@angular/core';
import { ClientInformations } from 'src/app/Classes/clientInformations';
import { BackEndService } from '../backEndACT/backEnd.service';
import * as _ from 'lodash'

// this is for clean deep copy 
// end of deep copy 
@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  allOrders = this.dataFromServer.ClientsData;
  procedures?:any
  newClient?:boolean
  existingClient?:any
  clientExist = false;
constructor(private dataFromServer:BackEndService) { }



postFunction(order){
  console.log(order)
  this.clientExist = false
    switch (order.workers[0].worker.nationality) {
      case 'Philippines':
        
        this.procedures =  [
          {musaned_contract:false,date:[]},
          {polo_contract:false,date:[]},
          {sending_contract:false,date:[]},
          {contract_signed:false,date:[]},
          {school:false,date:[]},
          {fingerPrint:false,date:[]},
          {visa:false,date:[]},
          {travel_permit:false,date:[]},
          {ticket_book:false,date:[]},
        ]
        const philippinesProcedures = {...order}
        philippinesProcedures.workers[0].procedures = this.procedures
        this.dataFromServer.ClientsData.forEach(element =>{

          if(element.client.id==philippinesProcedures.client.id){
          element.workers.push(philippinesProcedures.workers[0])
            this.clientExist = true
          }

        })

        if(!this.clientExist){
          this.dataFromServer.ClientsData.push(philippinesProcedures)
          console.log(philippinesProcedures)
        }
        
        break;
    
        case 'Bangladesh':
          this.procedures = [
            {musaned_contract:false,date:[]},
            {medical_examination:false,date:[]},
            {school:false,date:[]},
            {fingerPrint:false,date:[]},
            {visa:false,date:[]},
            {travel_permit:false,date:[]},
            {ticket_book:false,date:[]},
        ]
        const bangladeshProcedures = {...order}
        bangladeshProcedures.workers[0].procedures = this.procedures
        this.dataFromServer.ClientsData.forEach(element =>{

          if(element.client.id==bangladeshProcedures.client.id){
          element.workers.push(bangladeshProcedures.workers[0])
            this.clientExist = true
          }

        })

        if(!this.clientExist){
          this.dataFromServer.ClientsData.push(bangladeshProcedures)
        }
        console.log(bangladeshProcedures)

        break;

        case 'Uganda':
          this.procedures =[
            {musaned_contract:false,date:[]},
            {medical_examination:false,date:[]},
            {training:false,date:[]},
            {Police_certificate:false,date:[]},
            {fingerPrint:false,date:[]},
            {visa:false,date:[]},
            {ticket_book:false,date:[]},
        ]
        const ugandaProcedures = {...order}
        ugandaProcedures.workers[0].procedures = this.procedures
        this.dataFromServer.ClientsData.forEach(element =>{

          if(element.client.id==ugandaProcedures.client.id){
          element.workers.push(ugandaProcedures.workers[0])
            this.clientExist = true
          }

        })

        if(!this.clientExist){
          this.dataFromServer.ClientsData.push(ugandaProcedures)

        }
        console.log(ugandaProcedures)
        

        break;

        case 'Kenya':
          this.procedures =[
            {musaned_contract:false,date:[]},
            {medical_examination:false,date:[]},
            {training:false,date:[]},
            {Police_certificate:false,date:[]},
            {fingerPrint:false,date:[]},
            {visa:false,date:[]},
            {ticket_book:false,date:[]},
        ]
        const kenyaProcedures = {...order}
        kenyaProcedures.workers[0].procedures = this.procedures
        this.dataFromServer.ClientsData.forEach(element =>{

          if(element.client.id==kenyaProcedures.client.id){
          element.workers.push(kenyaProcedures.workers[0])
            this.clientExist = true
          }

        })

        if(!this.clientExist){
          this.dataFromServer.ClientsData.push(kenyaProcedures)


        }
        console.log(kenyaProcedures)
        break;
      default:
        break;
    }
    
  

  console.log(this.allOrders)

}

delete(id:any) {
  this.dataFromServer.ClientsData.forEach((element,index)=>{
    if(element.client.id===id) this.dataFromServer.ClientsData.splice(index,1);
 });
  console.log(this.dataFromServer.expenses)
}

/* editStatus(id:string,visa:string,newProcedures:any){

  this.dataFromServer.ClientsData.forEach(el => {

    if(el.client.id===id&&el.worker.visa===visa){

  
   el.procedures = _.cloneDeep(newProcedures);


    }
    
  });

} */
editStatus(visa:string,newProcedures:any){

  this.dataFromServer.ClientsData.forEach(el => {

    



      el.workers.forEach(e =>{
        if(e.worker.visa===visa){
          e.procedures = _.cloneDeep(newProcedures);

        }
      })
  


    
    
  });

}

/* backOut(visa:string){

  this.dataFromServer.ClientsData.forEach(el => {

    if(el.worker.visa===visa){

    el.worker.backout = true;

    }
    
  });
} */

backOut(visa:string){

  this.dataFromServer.ClientsData.forEach(el => {

    el.workers.forEach(e =>{
      if(e.worker.visa===visa){

        e.backout = true;
      }
    })

    
  });
}

confirmNewClient(id:number){
  console.log("hi")
  this.newClient = true;
  this.dataFromServer.ClientsData.forEach(el=>{
    if(id==el.client.id){
      this.newClient = false
      this.existingClient = el.client;
      console.log(this.existingClient)
    }
  })

}


}
