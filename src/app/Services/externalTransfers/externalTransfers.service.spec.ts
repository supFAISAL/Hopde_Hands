/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExternalTransfersService } from './externalTransfers.service';

describe('Service: ExternalTransfers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalTransfersService]
    });
  });

  it('should ...', inject([ExternalTransfersService], (service: ExternalTransfersService) => {
    expect(service).toBeTruthy();
  }));
});
