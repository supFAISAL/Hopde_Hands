/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkContractService } from './workContract.service';

describe('Service: WorkContract', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkContractService]
    });
  });

  it('should ...', inject([WorkContractService], (service: WorkContractService) => {
    expect(service).toBeTruthy();
  }));
});
