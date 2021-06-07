import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/allOrders/orders.service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { PoloRenewalService } from 'src/app/Services/poloRenewal/poloRenewal.service';
import { PoloRenewalPrintService } from 'src/app/Services/Print/poloRenewalPrint/poloRenewalPrint.service';
@Component({
  selector: 'app-poloRenewalProcedures',
  templateUrl: './poloRenewalProcedures.component.html',
  styleUrls: ['./poloRenewalProcedures.component.css']
})
export class PoloRenewalProceduresComponent implements OnInit {
  options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };
  head = [['رقم الجوال2','رقم الجوال','اسم العاملة','اسم الكفيل']]
  data = [];
  poloProcedures?:any
  constructor(private polo:PoloRenewalService,private print:PoloRenewalPrintService) { }

  ngOnInit() {
    this.poloProcedures = this.polo.poloProcedures
    // we used this to push the wanted data inside the array of data so it will looks like the head variable , tried many things none of them worked except this.
/*    this.poloProcedures.forEach(element => {
    this.data.push([element.clientPhone2,element.clientPhone,element.workerName,element.clientName])}); */
  }

  createPdf() {
    /* var doc = new jsPDF();
    doc.setFontSize(15);
    doc.addFont("../../../../assets/Amiri-Regular.ttf", "Amiri", "normal");
    doc.addFont("../../../../assets/Roboto-Regular.ttf", "Roboto", "normal");
    doc.addFont("../../../../assets/Cairo-Regular.ttf", "Cairo", "normal ");
    doc.setFont('Amiri'); */ // set font
/* var arabicText = "إجرائات التجديد"
doc.text(arabicText, 11, 8,); */

    //doc.setTextColor(100);

/* 
    (doc as any).autoTable({
      
      head: this.head,
      body: this.data,
      headStyles: {font: 'Amiri',halign:'center',fontStyle:'bold',fontSize:12},
      bodyStyles: { font: 'Roboto',halign:'center',fontStyle:'bold' },
      styles:{cellWidth:'wrap'},

      theme: 'grid',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })
 */
    // below line for Open PDF document in new tab
    //doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    //doc.save('myteamdetail.pdf');
  }

  printTable(data){
    this.print.setUp(data)
  }
}
