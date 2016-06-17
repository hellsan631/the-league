import { Router } from '@angular/router-deprecated';

import { isUserAuthenticated } from './index';
import { appInjector } from '../index';

export function SecureRoute(route) {
  return new Promise(resolve => {
    
    let injector = appInjector();
    let router   = injector.get(Router);
    
    const routeData = route.routeData.data;

    // We access routeData like an array here because thats how its typed in ComponentInstruction

    isUserAuthenticated(routeData.roles)
      .then(result => {
        console.log(route, result);
        if (!result) {
          resolve(false);
          router.navigate([routeData.redirect || 'Login']);
        } else {
          resolve(true);
        }
      });
      
  });
}