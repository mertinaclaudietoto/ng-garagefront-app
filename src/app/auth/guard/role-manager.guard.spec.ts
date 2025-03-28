import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleManagerGuard } from './role-manager.guard';

describe('roleManagerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleManagerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
