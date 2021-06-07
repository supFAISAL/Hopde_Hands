import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/allOrders/orders.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { RenewalProceduresService } from 'src/app/Services/renewalProcedures/renewalProcedures.service';
import { RenewalProceduresPrintService } from 'src/app/Services/Print/renewalProceduresPrint/renewalProceduresPrint.service';
@Component({
  selector: 'app-renewalProcedures',
  templateUrl: './renewalProcedures.component.html',
  styleUrls: ['./renewalProcedures.component.css']
})
export class RenewalProceduresComponent implements OnInit {
/*   options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
  }; */
  head = [['نوع العقد','الجنسية','رقم العقد','تاريخ التفويض','رقم التفويض','نوع الإجراء']]
  data = [];
  contracts?:any
  // for filtering purposes
  listOfFilter?:NzTableFilterList = [
  { text: 'إلكتروني', value: 'الكتروني' },
  { text: 'مساند', value: 'مساند' }];
  filterFn:NzTableFilterFn = (list: string[], item: any) => list.some(contractType => item.contractType.indexOf(contractType) !== -1)
  // end of filtering
  constructor(private renewal:RenewalProceduresService,private print:RenewalProceduresPrintService) { }

  ngOnInit() {
    this.contracts = this.renewal.renewalProcedures
    // we used this to push the wanted data inside the array of data so it will looks like the head variable , tried many things none of them worked except this.
/*    this.contracts.forEach(element => {
    this.data.push([element.contractType,element.nationality,element.contractNumber,element.authorizationDate.toLocaleDateString(undefined, this.options)
    ,element.authorizationNumber,element.procedureType])
}); */
  }

/*   createPdf() {
    var doc = new jsPDF();
    doc.setFontSize(15);
    doc.addFont("../../../../assets/Amiri-Regular.ttf", "Amiri", "normal");
    doc.addFont("../../../../assets/Roboto-Regular.ttf", "Roboto", "normal");
    doc.addFont("../../../../assets/Cairo-Regular.ttf", "Cairo", "normal ");
    doc.setFont('Amiri'); */ // set font
/* var arabicText = "إجرائات التجديد"
doc.text(arabicText, 11, 8,); */

/*     doc.setTextColor(100);


    (doc as any).autoTable({
      
      head: this.head,
      body: this.data,
      headStyles: {font: 'Amiri',halign:'center',fontStyle:'bold',fontSize:12},
      bodyStyles: { font: 'Amiri',halign:'center',fontStyle:'bold' },
      styles:{cellWidth:'wrap'},

      theme: 'grid',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    }) */

    // below line for Open PDF document in new tab
    // doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    // doc.save('myteamdetail.pdf');
  //}

  printTable(data){
    this.print.setUp(data)
  }
}

