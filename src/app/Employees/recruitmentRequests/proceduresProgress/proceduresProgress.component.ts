import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceduresProgress',
  templateUrl: './proceduresProgress.component.html',
  styleUrls: ['./proceduresProgress.component.css']
})
export class ProceduresProgressComponent implements OnInit {
  @Input() orderData;

  constructor() { }

  ngOnInit() {
  }

}
