import { TestBed } from '@angular/core/testing';

import { CarWeightService } from './car-weight.service';

describe('CarWeightService', () => {
  let service: CarWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
