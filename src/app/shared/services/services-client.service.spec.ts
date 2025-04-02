import { TestBed } from '@angular/core/testing';

import { ServicesClientService } from './services-client.service';

describe('ServicesClientService', () => {
  let service: ServicesClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
