import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bangladeshProgress',
  templateUrl: './bangladeshProgress.component.html',
  styleUrls: ['./bangladeshProgress.component.css']
})
export class BangladeshProgressComponent implements OnInit {
  @Input() RecivedProcedures;

  constructor() { }

  ngOnInit() {
  }

}
