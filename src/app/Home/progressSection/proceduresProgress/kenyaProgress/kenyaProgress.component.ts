import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kenyaProgress',
  templateUrl: './kenyaProgress.component.html',
  styleUrls: ['./kenyaProgress.component.css']
})
export class KenyaProgressComponent implements OnInit {
  @Input() RecivedProcedures;

  constructor() { }

  ngOnInit() {
  }

}
