import { Injectable } from '@angular/core';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage:LocalForage = require('localforage');

export const MEMBER_URL = 'api/members';

@Injectable()
export class MemberService {

  constructor() {}
  
  login() {
    console.log(localforage);
  }

}
