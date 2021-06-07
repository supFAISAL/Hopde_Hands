/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OfficesService } from './offices.service';

describe('Service: Offices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficesService]
    });
  });

  it('should ...', inject([OfficesService], (service: OfficesService) => {
    expect(service).toBeTruthy();
  }));
});
