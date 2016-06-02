import { isUserAuthenticated } from './index';
import { appInjector } from '../index';
import { Router } from '@angular/router-deprecated';

export function SecureRoute(roles: string[], redirect: string) {
  return new Promise(resolve => {
    
    let injector = appInjector();
    let router   = injector.get(Router);

    isUserAuthenticated(roles)
      .then(result => {
        if (!result) {
          resolve(false);
          router.navigate([redirect]);
        } else {
          resolve(true);
        }
      });
      
  });
}