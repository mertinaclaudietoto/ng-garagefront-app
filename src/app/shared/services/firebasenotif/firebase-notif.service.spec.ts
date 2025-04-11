import { TestBed } from '@angular/core/testing';

import { FirebaseNotifService } from './firebase-notif.service';


describe('FirebaseNotifService', () => {
  let service: FirebaseNotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseNotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
