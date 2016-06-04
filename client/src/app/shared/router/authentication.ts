declare var require: any
const localforage: any = require('localforage');

export function isUserAuthenticated(roles: Array<String>): Promise<boolean> {
  return new Promise((resolve) => {
    if (localStorage.getItem('authToken')) {
      localforage
        .getItem('currentUser')
        .then(user => {
          if (!user) resolve(roles.indexOf('guest') > -1);
          
          resolve(roles.indexOf(user.type) > -1);  
        })
    } else {
      resolve(roles.indexOf('guest') > -1);
    }
  })  
}


