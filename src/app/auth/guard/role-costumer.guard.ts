import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { roles } from './RULE';
export const roleCostumerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const idrule = localStorage.getItem('idrule');
  if(idrule!=roles.costumer){
    router.navigate(['/auth/login']); 
    return false;
  }
  return true;
};
