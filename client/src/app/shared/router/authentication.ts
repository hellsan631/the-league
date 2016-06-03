import { Promise } from 'es6-shim';

declare var require: any
const localforage: any = require('localforage');

export function isUserAuthenticated(roles: Array<String>): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem('authToken')) {
      localforage
        .getItem('currentUser')
        .then(user => {
          resolve(roles.indexOf(user.type) > -1);        
        })
    } else {
      resolve(roles.indexOf('guest') > -1);
    }
  })  
}


