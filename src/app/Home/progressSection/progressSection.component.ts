import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/Clients/clients.service';

@Component({
  selector: 'app-progressSection',
  templateUrl: './progressSection.component.html',
  styleUrls: ['./progressSection.component.css']
})
export class ProgressSectionComponent implements OnInit {
  showTheProgress = false;
  options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
  };
  constructor(private Client:ClientsService) {
    
   }
  clientData?:any

  ngOnInit() {
    this.clientData = this.Client.clientData;
  
    console.log(this.clientData)
  }
}
