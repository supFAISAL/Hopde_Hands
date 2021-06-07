import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesAddComponent } from './Employees/EmployeesManagment/employeesAdd/employeesAdd.component';
import { EmployeesPageBuilderComponent } from './Employees/employeesPageBuilder/employeesPageBuilder.component';
import { ExepensesComponent } from './Employees/exchange-Movements/Exepenses/Exepenses.component';
import { ExternalTransfersComponent } from './Employees/exchange-Movements/externalTransfers/externalTransfers.component';
import { MonthlyWorkerExpensesComponent } from './Employees/exchange-Movements/monthlyWorkerExpenses/monthlyWorkerExpenses.component';
import { OfficesTableComponent } from './Employees/externalOffices/officesTable/officesTable.component';
import { MainCardsComponent } from './Employees/mainCards/mainCards.component';
import { ClientInformationPrintComponent } from './Employees/recruitmentRequests/clientInformationPrint/clientInformationPrint.component';
import { OrdersTableComponent } from './Employees/recruitmentRequests/ordersTable/ordersTable.component';
import { PoloRenewalProceduresComponent } from './Employees/renewalProcedures/poloRenewalProcedures/poloRenewalProcedures.component';
import { RenewalProceduresComponent } from './Employees/renewalProcedures/renewalProcedures/renewalProcedures.component';
import { ArrivalsTableComponent } from './Employees/workers-Arrival/arrivalsTable/arrivalsTable.component';
import { HomeBuilderComponent } from './Home/homeBuilder/homeBuilder.component';
import {AuthGuard} from './guard/auth.guard'

const routes: Routes = [
  { path:'',component:HomeBuilderComponent },
  
  {
    path:'Emp',component:EmployeesPageBuilderComponent,
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {path:'', component:MainCardsComponent},
      {path:'expenses', component:ExepensesComponent},
      {path:'Offices',component:OfficesTableComponent},
      {path:'External-Transfers',component:ExternalTransfersComponent},
      {path:'Monthly-Expenses',component:MonthlyWorkerExpensesComponent},
      {path:'All-Orders',component:OrdersTableComponent},
      {path:'renewal-Procedures',component:RenewalProceduresComponent},
      {path:'polo-Procedures',component:PoloRenewalProceduresComponent},
      {path:'empAdd',component:EmployeesAddComponent},
      {path:'arrival',component:ArrivalsTableComponent},
    ]
  },
  /* { path:'Emp',component:EmployeesPageBuilderComponent,
  canActivate: [AuthGuard],
  children:[
    {path:'', component:MainCardsComponent},
    {path:'expenses', component:ExepensesComponent},
    {path:'Offices',component:OfficesTableComponent},
    {path:'External-Transfers',component:ExternalTransfersComponent},
    {path:'Monthly-Expenses',component:MonthlyWorkerExpensesComponent},
    {path:'All-Orders',component:OrdersTableComponent},
    {path:'renewal-Procedures',component:RenewalProceduresComponent},
    {path:'polo-Procedures',component:PoloRenewalProceduresComponent},
    {path:'empAdd',component:EmployeesAddComponent},
    {path:'arrival',component:ArrivalsTableComponent},





  ]}, */
  
  {path:'print',component:ClientInformationPrintComponent,canActivate: [AuthGuard],},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
