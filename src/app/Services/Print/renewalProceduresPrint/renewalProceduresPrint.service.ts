import { Injectable } from '@angular/core';
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as _ from 'lodash'

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}
@Injectable({
  providedIn: 'root'
})
export class RenewalProceduresPrintService {
  dataToPrint?:any;
/*    options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
  }; */
constructor(private http:HttpClient,private message: NzMessageService) { }
setUp(documentData:any) {
  this.dataToPrint = _.cloneDeep(documentData);
  this.dataToPrint.forEach(element => {
    // this one to change how the date will look on the document
    element.authorizationDate = new Date(element.authorizationDate).toLocaleDateString('default');
    // end
    // and this to add a comma after a thousend in the moeny amount
    element.contractValue = element.contractValue.toLocaleString('en')

    //end
  });
  console.log(this.dataToPrint)
  this.generate();
}
generate() {
  const id = this.message.loading('... جاري التحميل', { nzDuration: 0 }).messageId;
    this.message.remove(id);
    var data = this.dataToPrint;
  loadFile("http://127.0.0.1:8887/src/assets/forPrint/renewalProceduresTemplate.docx", function(
    error,
    content
  ) {
    if (error) {
      throw error;
    }
    var zip = new PizZip(content);
    var doc = new Docxtemplater(zip);
    doc.setData({
      "renewal":data      
      // end of contract informations
    });
    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render();
    } catch (error) {
      // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
      function replaceErrors(key, value) {
        if (value instanceof Error) {
          return Object.getOwnPropertyNames(value).reduce(function(
            error,
            key
          ) {
            error[key] = value[key];
            return error;
          },
          {});
        }
        return value;
      }
      console.log(JSON.stringify({ error: error }, replaceErrors));

      if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors
          .map(function(error) {
            return error.properties.explanation;
          })
          .join("\n");
        console.log("errorMessages", errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
      }
      throw error;
    }
    var out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }); //Output the document using Data-URI
    saveAs(out, "إجرائات التجديد.docx");
  })
  
}
}
