import { Component, Input, OnInit } from '@angular/core';
import { PrintService } from 'src/app/Services/print.service';

@Component({
  selector: 'app-clientInformationPrint',
  templateUrl: './clientInformationPrint.component.html',
  styleUrls: ['./clientInformationPrint.component.css']
})
export class ClientInformationPrintComponent implements OnInit {
  clientData?:any
  constructor(private printService: PrintService) {
    this.clientData = this.printService.dataToPrint

   }

  ngOnInit() {
    Promise.all(this.clientData).then(() =>
      this.printService.onDataReady()
    );

  }

 /*  printData(){
    const printContent = document.getElementById("print-section");
const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
WindowPrt.document.write(printContent.innerHTML);
WindowPrt.document.close();
WindowPrt.focus();
WindowPrt.print();
WindowPrt.close();
  } */

}
