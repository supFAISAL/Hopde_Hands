import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ugandaProgress',
  templateUrl: './ugandaProgress.component.html',
  styleUrls: ['./ugandaProgress.component.css']
})
export class UgandaProgressComponent implements OnInit {
  @Input() RecivedProcedures;

  constructor() { }

  ngOnInit() {
  }

}
