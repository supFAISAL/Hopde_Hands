import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { OfficesService } from 'src/app/Services/Offices/offices.service';

@Component({
  selector: 'app-officesTable',
  templateUrl: './officesTable.component.html',
  styleUrls: ['./officesTable.component.css']
})
export class OfficesTableComponent implements OnInit {
  
  offices?:any
  /* sourceText = 'الربوة,شارع يحيى المعلمي,جدة , مكة المكرمة , 123'
  sourceLang = 'auto';
  targetLang = 'en';
  url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
            + this.sourceLang + "&tl=" + this.targetLang + "&dt=t&q=" + encodeURI(this.sourceText); */
  constructor(private Offices:OfficesService,private message: NzMessageService, private http:HttpClient) {
   }

  ngOnInit() {
    /* this.http.get(this.url).subscribe(result=> {
      console.log(result[0][0][0]);
    }) */
    this.offices = this.Offices.offices;
  }
  delete(refrence:number): void {

    //this one to delete the Service Data tried it but since we take our data from listofdata variables nothing will change untill we refresh
    this.Offices.delete(refrence)
    this.message
    .loading('جاري حذف الصرفية', { nzDuration: 2500 })
    .onClose!.pipe(
      concatMap(() => this.message.success('تم حذف الصرفية', { nzDuration: 1000 }).onClose!),
      
    )
    .subscribe(() => {
      console.log('All completed!');
      // deleting the data locally (for froned the first line were for backend delete)
      this.offices = this.offices.filter(e => e.refrence !==refrence)
    });
    //End of deleting the service data
  }
}
