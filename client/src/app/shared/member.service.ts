import { Injectable, Inject } from '@angular/core';
import { LoopbackService } from './loopback.service';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage:LocalForage = require('localforage');

export const MEMBER_URL = 'api/members';

@Injectable()
export class MemberService {
  
  constructor(
    private _loopback: LoopbackService
  ) {}
  
  login() {
    console.log(localforage);
    let filter = {
      where: {
        email: "matkle414@gmail.com"
      }
    };
    
    return this._loopback.get(MEMBER_URL, JSON.stringify(filter));
  }

}
