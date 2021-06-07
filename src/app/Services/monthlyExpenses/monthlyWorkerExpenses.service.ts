/* import { Injectable } from '@angular/core';
import { MonthlyExpenses } from 'src/app/Classes/monthlyExpenses';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class MonthlyWorkerExpensesService {

constructor(private dataFromServer:BackEndService) { }
expenses?: Array<MonthlyExpenses> = this.dataFromServer.monthlyExpenses;
targetedWorker?:any
postFunction(expense){
  this.dataFromServer.monthlyExpenses.push(expense)
  console.log(this.targetedWorker)
}

searchWorker(musaned:string){

  this.dataFromServer.ClientsData.forEach(el=>{

    if(musaned==el.contract.contractNumber){
      this.targetedWorker = el.worker.fullName
    }
  })

}

}
 */