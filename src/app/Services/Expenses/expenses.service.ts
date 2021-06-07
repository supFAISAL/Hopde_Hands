import { Injectable } from '@angular/core';
import { Expenses } from 'src/app/Classes/expenses';
import { BackEndService } from '../backEndACT/backEnd.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

constructor(private dataFromServer:BackEndService) { }
expensesData?: Array<Expenses> = this.dataFromServer.expenses;


postFunction(expenses){
  this.dataFromServer.expenses.push(expenses)

  console.log(this.expensesData)

}
delete(ref:any) {
  this.dataFromServer.expenses.forEach((element,index)=>{
    if(element.refrence===ref) this.dataFromServer.expenses.splice(index,1);
 });
  console.log(this.dataFromServer.expenses)
}

}
