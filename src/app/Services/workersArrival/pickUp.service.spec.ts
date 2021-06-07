/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PickUpService } from './pickUp.service';

describe('Service: PickUp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickUpService]
    });
  });

  it('should ...', inject([PickUpService], (service: PickUpService) => {
    expect(service).toBeTruthy();
  }));
});
