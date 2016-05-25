import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Member, Credentials } from './models/index';
import { Observable } from 'rxjs/Observable';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: any = require('localforage');

@Injectable()
export class MemberService extends LoopbackService {
  
  constructor(public _loopback: LoopbackProvider) {
    super('api/members', _loopback);
  }
  
  login(credentials: Credentials): Observable<Member> { 
    return Observable.create(observer => {
      this._loopback
        .post(`${this.BASE_URL}/login`, credentials)
        .subscribe(response => {
          
          // @TODO Loopback's response might be different then whats here.
          localforage.setItem('currentUser', response.user);
          
          // We're using localStorage here instead so we can get the values syncronously when needed
          localStorage.setItem('authToken', response.token);
          
          // @TODO set auth token for all other requests
          observer.onNext(response.user);
        });
    });
  }
  
  //logout(): Observable<any> {}
  
  getCurrent(): Observable<Member> {
    return Observable.create(function (observer) {
      localforage
        .getItem('currentUser')
        .then(user => observer.onNext(user));
    });
  }
  
}
