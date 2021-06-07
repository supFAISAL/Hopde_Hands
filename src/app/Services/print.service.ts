import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;
  dataToPrint = [];
constructor(private router: Router) { }

printDocument(documentData:any) {
  if(this.dataToPrint.length!==0){
    this.dataToPrint.length = 0;
  }
  this.isPrinting = true;
  this.dataToPrint.push(documentData)
  this.router.navigate(['/print',])
}

onDataReady() {
  setTimeout(() => {
    window.print();
    this.isPrinting = false;
    this.router.navigate(['/Emp/All-Orders']);
  });
}


}
