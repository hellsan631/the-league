import { isUserAuthenticated } from './';
import { appInjector } from '../';
import { Router } from '@angular/router-deprecated';

export function secureRoute(roles: Array<String>, redirect: String) {
    return new Promise((resolve, reject) => {

    let injector = appInjector();
    let router = injector.get(Router);

    isUserAuthenticated(['admin', 'user'])
        .then(result => {
        if (!result) {
            resolve(false);
            router.navigate([redirect])
        } else {
            resolve(true);
        }
    })     
  })    
}