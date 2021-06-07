/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RenewalProceduresPrintService } from './renewalProceduresPrint.service';

describe('Service: RenewalProceduresPrint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenewalProceduresPrintService]
    });
  });

  it('should ...', inject([RenewalProceduresPrintService], (service: RenewalProceduresPrintService) => {
    expect(service).toBeTruthy();
  }));
});
