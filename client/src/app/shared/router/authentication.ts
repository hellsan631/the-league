import { Member } from '../index';

declare var require: any
const localforage: any = require('localforage');

export function isUserAuthenticated(roles: Array<String>): Promise<boolean> {
  return new Promise(resolve => {
    if (localStorage.getItem('authToken')) {
      localforage
        .getItem('currentUser')
        .then(user => {
          if (!user) resolve(roles.indexOf('guest') > -1);
          
          resolve(roles.indexOf(user.type) > -1);  
        });
    } else {
      resolve(roles.indexOf('guest') > -1);
    }
  }); 
}

export function isUserAuthenticatedSync(roles: Array<String>, user: Member | Boolean): boolean {
  if (!user) {
    return roles.indexOf('guest') > -1;
  }

  // define user as type member. Known as 'Union Types'
  return roles.indexOf((<Member>user).type) > -1; 
}


