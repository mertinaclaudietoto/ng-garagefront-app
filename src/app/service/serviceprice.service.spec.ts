import { TestBed } from '@angular/core/testing';

import { ServicepriceService } from './serviceprice.service';

describe('ServicepriceService', () => {
  let service: ServicepriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
