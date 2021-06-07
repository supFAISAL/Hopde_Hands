/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeesLoginService } from './employeesLogin.service';

describe('Service: EmployeesLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesLoginService]
    });
  });

  it('should ...', inject([EmployeesLoginService], (service: EmployeesLoginService) => {
    expect(service).toBeTruthy();
  }));
});
