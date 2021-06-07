/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoloRenewalPrintService } from './poloRenewalPrint.service';

describe('Service: PoloRenewalPrint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoloRenewalPrintService]
    });
  });

  it('should ...', inject([PoloRenewalPrintService], (service: PoloRenewalPrintService) => {
    expect(service).toBeTruthy();
  }));
});
