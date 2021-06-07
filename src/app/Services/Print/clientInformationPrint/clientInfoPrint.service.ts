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
export class ClientInfoPrintService {
  dataToPrint?:any;

constructor(private http:HttpClient,private message: NzMessageService) { }

setUp(documentData:any,clientData:any) {
  this.dataToPrint = _.cloneDeep(documentData);
  this.dataToPrint = {...this.dataToPrint,...clientData}
  console.log(this.dataToPrint)
  this.generate();
}
generate() {
  const id = this.message.loading('... جاري التحميل', { nzDuration: 0 }).messageId;
    this.message.remove(id);
    var data = this.dataToPrint;
/*     const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    }; */
  loadFile("http://127.0.0.1:8887/src/assets/forPrint/clientInfoTemplate.docx", function(
    error,
    content
  ) {
    if (error) {
      throw error;
    }
    var zip = new PizZip(content);
    var doc = new Docxtemplater(zip);
    doc.setData({
      // client information
      fileNum:data.contract.fileNumber,
      clientName:data.fullName,
      clientId:data.id,
      clientNation:data.nationality,
      clientFamily:data.familyMembers,
      clientStreet:data.address.street,
      clientNeighbor:data.address.neighborhood,
      clientProvince:data.address.province,
      clientCity:data.address.city,
      clientPostal:data.address.postal,
      clientPhone:data.phone,
      clientPhone2:data.phone2,
      clientEmail:data.email,
      //end of client informations
      // Worker Information s
      workerName:data.worker.fullName,
      workerPassport:data.worker.passport.passportNum,
      workerVisa:data.worker.visa,
      workerNation:data.worker.nationality,
      workerGender:data.worker.gender,
      workerAge:data.worker.age,
      workerOcc:data.worker.occupation,
      workerPhone:data.worker.phone,
      workerProvince:data.worker.province,
      workerCity:data.worker.city,
      // End of Worker Informations
      // Contract informations
      contractNum:data.contract.contractNumber,
      contractType:data.contract.contractType,
      contractValue:data.contract.contractValue,
      authNumber:data.contract.authorizationNumber,
      authDate: new Date(data.contract.authorizationDate).toLocaleDateString('default'),
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
    saveAs(out, `${data.contract.fileNumber}.docx`);
  })
  
}
}
