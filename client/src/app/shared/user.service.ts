import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Member, Credentials } from './models/index';
import { Observable } from 'rxjs/Observable';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: any = require('localforage');

@Injectable()
export class UserService extends LoopbackService {
  
  constructor(public _loopback: LoopbackProvider) {
    super('api/members', _loopback);
  }
  
   getCurrent(): Observable<Member> {
    return Observable.create(observer => {
      localforage
        .getItem('currentUser')
        .then(member => {
          
          if (!member) {
            observer.error('No Member Found');
            return observer.complete();
          }
          
          if (Object.keys(member).length > 1) {
            observer.next(member);
          }
          
          this.findById(member.id)
            .subscribe(
              memberFound => observer.next(memberFound),
              error => observer.error(error)
            );
              
          this.events.subscribe(event => {
            if (event.type === 'update' && event.data.id === member.id) {
              observer.next(event.data);
            }
          });
        })
        .catch(error => observer.error(error)); 
      
      return () => {
        this.events.unsubscribe();
      }
    });
  }  
}
