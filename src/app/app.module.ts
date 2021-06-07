import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HeaderComponent } from './Home/header/header.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { EmployeesLoginComponent } from './Home/header/employeesLogin/employeesLogin.component';
import { AboutComponent } from './Home/about/about.component';
import { PhilippinesInfoComponent } from './Home/proceduresInformations/philippinesInfo/philippinesInfo.component';
import { BangladeshInfoComponent } from './Home/proceduresInformations/bangladeshInfo/bangladeshInfo.component';
import { UgandaInfoComponent } from './Home/proceduresInformations/ugandaInfo/ugandaInfo.component';
import { KenyaInfoComponent } from './Home/proceduresInformations/kenyaInfo/kenyaInfo.component';
import { ProceduresInformationsComponent } from './Home/proceduresInformations/proceduresInformations.component';
import { ProgressSectionComponent } from './Home/progressSection/progressSection.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HomeBuilderComponent } from './Home/homeBuilder/homeBuilder.component';
import { PhilippinesProgressComponent } from './Home/progressSection/proceduresProgress/philippinesProgress/philippinesProgress.component';
import { BangladeshProgressComponent } from './Home/progressSection/proceduresProgress/bangladeshProgress/bangladeshProgress.component';
import { KenyaProgressComponent } from './Home/progressSection/proceduresProgress/kenyaProgress/kenyaProgress.component';
import { UgandaProgressComponent } from './Home/progressSection/proceduresProgress/ugandaProgress/ugandaProgress.component';
import { EmployeesPageBuilderComponent } from './Employees/employeesPageBuilder/employeesPageBuilder.component';
import { MainCardsComponent } from './Employees/mainCards/mainCards.component';
import { ExepensesComponent } from './Employees/exchange-Movements/Exepenses/Exepenses.component';
import { OfficesFormComponent } from './Employees/externalOffices/officesForm/officesForm.component';
import { OfficesTableComponent } from './Employees/externalOffices/officesTable/officesTable.component';
import { ExternalTransfersComponent } from './Employees/exchange-Movements/externalTransfers/externalTransfers.component';
import { MonthlyWorkerExpensesComponent } from './Employees/exchange-Movements/monthlyWorkerExpenses/monthlyWorkerExpenses.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { NewOrderFormComponent } from './Employees/recruitmentRequests/newOrderForm/newOrderForm.component';
import { OrdersTableComponent } from './Employees/recruitmentRequests/ordersTable/ordersTable.component';
import { RenewalProceduresComponent } from './Employees/renewalProcedures/renewalProcedures/renewalProcedures.component';
import { PoloRenewalProceduresComponent } from './Employees/renewalProcedures/poloRenewalProcedures/poloRenewalProcedures.component';
import { PhilippinesToggleComponent } from './Employees/recruitmentRequests/proceduresProgress/proceduresToggle/philippinesToggle/philippinesToggle.component';
import { BangladeshToggleComponent } from './Employees/recruitmentRequests/proceduresProgress/proceduresToggle/bangladeshToggle/bangladeshToggle.component';
import { KenyaToggleComponent } from './Employees/recruitmentRequests/proceduresProgress/proceduresToggle/kenyaToggle/kenyaToggle.component';
import { UgandaToggleComponent } from './Employees/recruitmentRequests/proceduresProgress/proceduresToggle/ugandaToggle/ugandaToggle.component';
import { ProceduresProgressComponent } from './Employees/recruitmentRequests/proceduresProgress/proceduresProgress.component';
import { NgxPrintModule } from 'ngx-print';
import { ClientInformationPrintComponent } from './Employees/recruitmentRequests/clientInformationPrint/clientInformationPrint.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EmployeesAddComponent } from './Employees/EmployeesManagment/employeesAdd/employeesAdd.component';
import { ArrivalsTableComponent } from './Employees/workers-Arrival/arrivalsTable/arrivalsTable.component';
import {DatePipe} from '@angular/common';

registerLocaleData(en);

@NgModule({
  declarations: [						
    AppComponent,
    HeaderComponent,
    EmployeesLoginComponent,
    AboutComponent,
    PhilippinesInfoComponent,
    BangladeshInfoComponent,
    UgandaInfoComponent,
    KenyaInfoComponent,
    ProceduresInformationsComponent,
    ProgressSectionComponent,
    FooterComponent,
    HomeBuilderComponent,
    PhilippinesProgressComponent,
    BangladeshProgressComponent,
    KenyaProgressComponent,
    UgandaProgressComponent,
    EmployeesPageBuilderComponent,
    MainCardsComponent,
    ExepensesComponent,
    OfficesFormComponent,
    OfficesTableComponent,
    ExternalTransfersComponent,
    MonthlyWorkerExpensesComponent,
    NewOrderFormComponent,
    OrdersTableComponent,
    RenewalProceduresComponent,
    PoloRenewalProceduresComponent,
    PhilippinesToggleComponent,
    BangladeshToggleComponent,
    KenyaToggleComponent,
    UgandaToggleComponent,
    ProceduresProgressComponent,
    ClientInformationPrintComponent,
    EmployeesAddComponent,
    InvoiceComponent,
    ArrivalsTableComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxPrintModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
