import { Router } from '@angular/router-deprecated';

import { isUserAuthenticated } from './index';
import { appInjector } from '../index';

export function SecureRoute(route) {  
  return new Promise(resolve => {
    
    let injector = appInjector();
    let router   = injector.get(Router);
    
    const routeData = route.routeData.data;

    isUserAuthenticated(routeData.roles)
      .then(result => {
        if (!result) {
          resolve(false);
          router.navigate([routeData.redirect || 'Login']);
        } else {
          resolve(true);
        }
      });
      
  });
}