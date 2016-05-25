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
          
          // We're using localStorage here instead so we can get the values syncronously when needed
          localStorage.setItem('authToken', response.id);
          
          // @TODO Loopback's response might be different then whats here.
          localforage.setItem('currentUser', {id: response.userId});

          // @TODO set auth token for all other requests
          observer.onNext(response.userId);
        },
        error => {
          observer.error(error);
        });
    });
  }
  
  //logout(): Observable<any> {}
  
  getCurrent(): Promise<any> {
    return new Promise((resolve, reject) => {
       localforage
        .getItem('currentUser')
        .then(member => {
          
          if (!member) return reject('No Member Found');
          
          if (Object.keys(member).length > 1) {
            resolve(member);
          }
          
          
        })
        .catch(error => reject(error));
    })
   
  }
  
}
