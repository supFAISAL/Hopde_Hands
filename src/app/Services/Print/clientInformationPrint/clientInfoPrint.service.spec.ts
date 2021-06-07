/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientInfoPrintService } from './clientInfoPrint.service';

describe('Service: ClientInfoPrint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientInfoPrintService]
    });
  });

  it('should ...', inject([ClientInfoPrintService], (service: ClientInfoPrintService) => {
    expect(service).toBeTruthy();
  }));
});
