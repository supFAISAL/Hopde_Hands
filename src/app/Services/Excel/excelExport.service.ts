import { Injectable } from '@angular/core';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { WorkBook, WorkSheet } from 'xlsx/types';
export interface IExportAsExcelProps {
  readonly data: any[];
  readonly fileName: string;
  readonly sheetName?: string;
  readonly header?: string[];
  readonly table?: HTMLElement;
}
@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  fileExtension = '.xlsx';
constructor() { }
public exportAsExcel({
  data,
  fileName,
  sheetName = 'Data',
  header = [],
  table
}: IExportAsExcelProps): void {
  let wb: WorkBook;

  if (table) {
    wb = XLSXUtils.table_to_book(table);
  } 
  // , skipHeader:true This is for skipping the headers making the excel without headers we include it like this  { header, skipHeader:true }
  else {
    const ws: WorkSheet = XLSXUtils.json_to_sheet(data, { header});
    console.log(ws)
    wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, sheetName);
  }

  writeFile(wb, `${fileName}${this.fileExtension}`);
}

}
