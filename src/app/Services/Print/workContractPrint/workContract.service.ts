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
export class WorkContractService {
  dataToPrint?:any;
  workerNameAr?:any
  loading = true;
  

  translated = {
    client:{
      clNameEng : '',
      clCityEng:'',
      clNeighborEng:'',
      clStreetEng:'',
      clStatus:''
    },
    worker:{
      woNameAr:'',
      woOccEng:'',
      woProvinceAr:'',
      woCityAr:'',
      woStatusAr:'',
      woPoiAr:'',
      woRelativesNameAr:'',
      woRelativesProvinceAr:'',
      woRelativesCityAr:'',

    }
     

  }

constructor(private http:HttpClient,private message: NzMessageService) { }

  setUp(documentData:any,clientData:any) {
   this.dataToPrint = _.cloneDeep(documentData);
   this.dataToPrint = {...this.dataToPrint,...clientData}
    console.log(this.dataToPrint)
    this.generate();
    
  }

  async translate(){
    //Client Translatation
    const clientName = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "eng" + "&dt=t&q=" + encodeURI(this.dataToPrint?.fullName)).toPromise();
      const clientCity = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "eng" + "&dt=t&q=" + encodeURI(this.dataToPrint?.address.city)).toPromise();
      const clientNeighbor = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "eng" + "&dt=t&q=" + encodeURI(this.dataToPrint?.address.neighborhood)).toPromise();
      const clientStreet = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "eng" + "&dt=t&q=" + encodeURI(this.dataToPrint?.address.street)).toPromise();
      const clientStatus = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "eng" + "&dt=t&q=" + encodeURI(this.dataToPrint?.status)).toPromise();
      //End of Client Translation
      //Worker Transliation
      const woNameAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "en" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.fullName)).toPromise();
      const woOccEng = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "ar" + "&tl=" + "eng" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.occupation)).toPromise();
      const woProvinceAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.province)).toPromise();
      const woCityAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.city)).toPromise();
      const woStatusAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.status)).toPromise();
      const woPoiAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.passport.placeOfIssue)).toPromise();
      const woRelativesNameAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.relatives.fullName)).toPromise();
      const woRelativesProvinceAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.relatives.province)).toPromise();
      const woRelativesCityAr = await this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "auto" + "&tl=" + "ar" + "&dt=t&q=" + encodeURI(this.dataToPrint?.worker.relatives.city)).toPromise();
      //End of Worker Translation

    return this.translated.client.clNameEng = clientName[0][0][0] ,
     this.translated.client.clCityEng = clientCity[0][0][0] ,
     this.translated.client.clNeighborEng = clientNeighbor[0][0][0],
     this.translated.client.clStreetEng = clientStreet[0][0][0],
     this.translated.client.clStatus = clientStatus[0][0][0],
    //Worker Translated Data 
    this.translated.worker.woNameAr = woNameAr[0][0][0],
    this.translated.worker.woOccEng = woOccEng[0][0][0],
    this.translated.worker.woProvinceAr = woProvinceAr[0][0][0],
    this.translated.worker.woCityAr = woCityAr[0][0][0],
    this.translated.worker.woStatusAr = woStatusAr[0][0][0],
    this.translated.worker.woPoiAr = woPoiAr[0][0][0],
    this.translated.worker.woRelativesNameAr = woRelativesNameAr[0][0][0],
    this.translated.worker.woRelativesProvinceAr = woRelativesProvinceAr[0][0][0],
    this.translated.worker.woRelativesCityAr = woRelativesCityAr[0][0][0]

    //End of Worker Translated Data


    
  }

  // here .then and above in promise all of that just to wait for the request to finish then procced to other function so we can have it all in time (source :https://stackoverflow.com/questions/48119369/wait-for-http-request-to-complete-in-angular-4-service)
generate() {
  const id = this.message.loading('... جاري التحميل', { nzDuration: 0 }).messageId;
  this.translate().then(() => {
    this.message.remove(id);
    var data = this.dataToPrint 
    const translatedDataEng = this.translated
    const options = {
      /* weekday: 'long', */year: 'numeric', month: 'numeric', day: 'numeric',
    };
  loadFile("http://127.0.0.1:8887/src/assets//forPrint/contractTemplate.docx", function(
    error,
    content
  ) {
    if (error) {
      throw error;
    }
    var zip = new PizZip(content);
    var doc = new Docxtemplater(zip);
    doc.setData({
      // Client Data
      clName:data.fullName,
      clCity:data.address.city,
      clNeighbor:data.address.neighborhood,
      clStreet:data.address.street,
      clFamily:data.familyMembers,
      clStatus:data.status,
      clPhone:data.phone,
      //End Of Client Data
      //Worker Data 
      woName:data.worker.fullName,
      woOccAr:data.worker.occupation,
      woProvince:data.worker.province,
      woCity:data.worker.city,
      woStatus:data.worker.status,
      woPassport:data.worker.passport.passportNum,
      woPhone:data.worker.phone,
      woDoi:data.worker.passport.dateOfIssue.toLocaleDateString('EG', options),
      woPoi:data.worker.passport.placeOfIssue,
      woRelativesName:data.worker.relatives.fullName,
      woRelativesProvince:data.worker.relatives.province,
      woRelativesCity:data.worker.relatives.city,
      woRelativesPhone:data.worker.relatives.phone,
      visa:data.worker.visa,
      //End of Worker Data
      //Eng translated 
      //Client English Data
      clNameEng:translatedDataEng.client.clNameEng,
      clCityEng:translatedDataEng.client.clCityEng,
      clNeighborEng:translatedDataEng.client.clNeighborEng,
      clStreetEng:translatedDataEng.client.clStreetEng,
      clStatusEng:translatedDataEng.client.clStatus,

      //End of Client English Data

      //Worker Arabic Data
      woNameAr:translatedDataEng.worker.woNameAr,
      woOcc:translatedDataEng.worker.woOccEng,
      woProvinceAr:translatedDataEng.worker.woProvinceAr,
      woCityAr:translatedDataEng.worker.woCityAr,
      woStatusAr:translatedDataEng.worker.woStatusAr,
      woPoiAr:translatedDataEng.worker.woPoiAr,
      woRelativesNameAr:translatedDataEng.worker.woRelativesNameAr,
      woRelativesProvinceAr:translatedDataEng.worker.woRelativesProvinceAr,
      woRelativesCityAr:translatedDataEng.worker.woRelativesCityAr,

      //End of Worker English Data

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
    saveAs(out, `${data.contract.contractNumber}.docx`);
  });
  });
  
}
}