import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../Services/allOrders/orders.service';
import { PrintService } from '../Services/print.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceIds?:any
  invoiceDetails: Promise<any>[];
  constructor(private printService: PrintService) {
    this.invoiceIds = this.printService.dataToPrint
   }

  ngOnInit() {

    Promise.all(this.invoiceIds).then(() =>
      this.printService.onDataReady()
    );

  }

}
