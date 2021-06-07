/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RenewalProceduresService } from './renewalProcedures.service';

describe('Service: RenewalProcedures', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenewalProceduresService]
    });
  });

  it('should ...', inject([RenewalProceduresService], (service: RenewalProceduresService) => {
    expect(service).toBeTruthy();
  }));
});
