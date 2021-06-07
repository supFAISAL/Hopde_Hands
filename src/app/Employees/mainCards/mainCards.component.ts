import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainCards',
  templateUrl: './mainCards.component.html',
  styleUrls: ['./mainCards.component.css']
})
export class MainCardsComponent implements OnInit {
userRole?:any
  constructor() { }

  ngOnInit() {
    const pickerName = JSON.parse(localStorage.getItem('token'))
    this.userRole = pickerName.role;
    console.log(this.userRole)
  }

}
