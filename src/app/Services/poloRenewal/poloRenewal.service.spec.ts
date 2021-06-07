/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoloRenewalService } from './poloRenewal.service';

describe('Service: PoloRenewal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoloRenewalService]
    });
  });

  it('should ...', inject([PoloRenewalService], (service: PoloRenewalService) => {
    expect(service).toBeTruthy();
  }));
});
