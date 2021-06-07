import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { OrdersService } from 'src/app/Services/allOrders/orders.service';
import { ExcelExportService } from 'src/app/Services/Excel/excelExport.service';
import { PrintService } from 'src/app/Services/print.service';
import { ClientInfoPrintService } from 'src/app/Services/Print/clientInformationPrint/clientInfoPrint.service';
import { WorkContractService } from 'src/app/Services/Print/workContractPrint/workContract.service';

@Component({
  selector: 'app-ordersTable',
  templateUrl: './ordersTable.component.html',
  styleUrls: ['./ordersTable.component.css']
})
export class OrdersTableComponent implements OnInit {
  isVisible = false;
  switchValue = false;
  loading = false;
  visibleId=false;
  visiblePassport=false;
  searchValueId = '';
  searchValuePassport = '';
  allOrders?:any
  expensesData: any;
  excelData = [];
  excelFileName= 'بيانات العقد.xlsx';  

  constructor(private excelExport:ExcelExportService, private Orders:OrdersService,private message: NzMessageService,private printService:PrintService,private contractService:WorkContractService,private clientPrintService:ClientInfoPrintService) { 

    
  }

  ngOnInit() {
    this.allOrders = this.Orders.allOrders;
    console.log(this.allOrders)

    // this one to add expand to make our table expand false so we can expand individually. its frontend code all happens here we use it since we may have multiable workers for 1 client
    this.allOrders.forEach(element => {
      element.client.expand = false

    });

  
  }
  clickSwitch(e): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        
        this.loading = false;
      }, 1000);
    }
    console.log(e)
  }

  showModal(): void {
    this.isVisible = true;

  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  resetId(): void {
    this.searchValueId = '';
    this.searchId();
  }

  resetPassport(): void {
    this.searchValuePassport = '';
    this.searchPassport();
  }


  searchId(): void {
    this.visibleId = false;
    this.allOrders = this.Orders.allOrders.filter((item:any) => item.client.id.indexOf(this.searchValueId) !== -1);
  }

  searchPassport(): void {
    this.visiblePassport = false;
    this.allOrders = this.Orders.allOrders.filter((item:any) => item.worker.passport.indexOf(this.searchValuePassport) !== -1);
  }


/*   delete(id:string): void {

    //this one to delete the Service Data tried it but since we take our data from listofdata variables nothing will change untill we refresh
    this.Orders.delete(id)
    this.message
    .loading('جاري حذف البيانات', { nzDuration: 2500 })
    .onClose!.pipe(
      concatMap(() => this.message.success('تم حذف البيانات', { nzDuration: 1000 }).onClose!),
      
    )
    .subscribe(() => {
      console.log('All completed!');
      // deleting the data locally (for froned the first line were for backend delete)
      this.allOrders = this.allOrders.filter(e => e.client.id !==id)
    });
    //End of deleting the service data
  }
 */
  printData(data,clientData){
    this.clientPrintService.setUp(data,clientData)
  }
  contractPrint(data,clientData){
    this.contractService.setUp(data,clientData)
  }
  backout(visa:string){

    this.Orders.backOut(visa);

  }

  exportingExcel(){
    this.allOrders.forEach(clientData => {
      clientData.workers.forEach(workersData => {
        this.excelData.push({
          'قيمة العقد':workersData.contract.contractValue,
       'اسم العاملة':workersData.worker.fullName,
       'رقم المكتب':workersData.worker.office,
       'رقم مساند':workersData.contract.contractNumber,
       'رقم الهوية': clientData.client.id,
       'اسم الكفيل':clientData.client.fullName,
  
       })
      });
     
    
   });

     
   this.excelExport.exportAsExcel({data:this.excelData,fileName:this.excelFileName})
   //this one to clear the data after the download because if we didn't and the user clicked print excel twice at tthe same time the data will be dublicated;
   this.excelData.length = 0;
   //end
 }
}
