import { TestBed } from '@angular/core/testing';

import { CarSizeService } from './car-size.service';

describe('CarSizeService', () => {
  let service: CarSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
