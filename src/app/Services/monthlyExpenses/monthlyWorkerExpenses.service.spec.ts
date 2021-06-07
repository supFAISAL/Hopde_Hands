/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonthlyWorkerExpensesService } from './monthlyWorkerExpenses.service';

describe('Service: MonthlyWorkerExpenses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthlyWorkerExpensesService]
    });
  });

  it('should ...', inject([MonthlyWorkerExpensesService], (service: MonthlyWorkerExpensesService) => {
    expect(service).toBeTruthy();
  }));
});
