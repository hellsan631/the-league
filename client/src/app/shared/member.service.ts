import { Injectable } from '@angular/core';
const localforage = require('localforage');

declare var require: any

export const MEMBER_URL = 'api/members';

@Injectable()
export class MemberService {

  constructor() {}
  
  login() {
    console.log(localforage);
  }

}
