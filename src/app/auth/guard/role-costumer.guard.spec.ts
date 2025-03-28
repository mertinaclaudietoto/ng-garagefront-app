import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleCostumerGuard } from './role-costumer.guard';

describe('roleCostumerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleCostumerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
