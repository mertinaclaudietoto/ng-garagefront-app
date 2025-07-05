import { TestBed } from '@angular/core/testing';

import { PanierviewService } from './panierview.service';

describe('PanierviewService', () => {
  let service: PanierviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
