import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Member } from './models/member.model';
import { Observable } from 'rxjs/Observable';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage:LocalForage = require('localforage');

@Injectable()
export class MemberService extends LoopbackService {
  
  constructor(public _loopback: LoopbackProvider) {
    super('api/members', _loopback);
  }
  
  login() {
    console.log(localforage);
    let filter = {
      where: {
        email: 'matkle414@gmail.com'
      }
    };
    
    console.log(this._loopback);
    
    return this.find();
  }
  
}
