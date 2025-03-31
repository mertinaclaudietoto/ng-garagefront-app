import { TestBed } from '@angular/core/testing';

import { ServiceviewService } from './serviceview.service';

describe('ServiceviewService', () => {
  let service: ServiceviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
