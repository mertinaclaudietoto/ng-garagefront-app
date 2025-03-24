import { TestBed } from '@angular/core/testing';

import { CarCostumersService } from './car-costumers.service';

describe('CarCostumersService', () => {
  let service: CarCostumersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCostumersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
