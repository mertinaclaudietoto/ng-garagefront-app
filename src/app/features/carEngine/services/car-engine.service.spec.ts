import { TestBed } from '@angular/core/testing';

import { CarEngineService } from './car-engine.service';

describe('CarEngineService', () => {
  let service: CarEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
