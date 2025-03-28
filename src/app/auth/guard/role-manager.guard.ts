import { CanActivateFn , Router } from '@angular/router';
import { inject } from '@angular/core';
import { roles } from './RULE';
export const roleManagerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const idrule = localStorage.getItem('idrule');
  if(idrule!=roles.manager){
    router.navigate(['/auth/login']); 
    return false;
  }
  return true;
};
