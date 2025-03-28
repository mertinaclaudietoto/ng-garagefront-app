import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleMechanicGuard } from './role-mechanic.guard';

describe('roleMechanicGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleMechanicGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
