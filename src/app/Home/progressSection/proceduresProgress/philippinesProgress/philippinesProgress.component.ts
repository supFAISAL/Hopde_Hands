import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-philippinesProgress',
  templateUrl: './philippinesProgress.component.html',
  styleUrls: ['./philippinesProgress.component.css']
})
export class PhilippinesProgressComponent implements OnInit {
  @Input() RecivedProcedures;

  constructor() { }

  ngOnInit() {
    console.log(this.RecivedProcedures)
  }

}
