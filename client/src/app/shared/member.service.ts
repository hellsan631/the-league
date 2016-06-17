import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Member, Credentials } from './models/index';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any;
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
          
          this.findById(response.userId)
            .subscribe(user => {
              // We're using localStorage here instead so we can get the values syncronously when needed
              localStorage.setItem('authToken', response.id);
          
              // @TODO Loopback's response might be different then whats here.
              localforage.setItem('currentUser', user)
                .then(() => {
                  this.events.emit({
                    type: 'auth',
                    base: this.BASE_URL,
                    data: user
                  });
                });
              
              // @TODO set auth token for all other requests
              observer.next(response.userId);
                        
              // We want to finish our event here;
              observer.complete();              
          }) 
        },
        error => {
          observer.error(error);
        });
    });
  }
  
  logout(): Observable<any> {
    return Observable.create(observer => {
       
      localStorage.removeItem('authToken');
      
      localforage
        .removeItem('currentUser')
        .then(() => {
          this.events.emit({
            type: 'auth',
            base: this.BASE_URL,
            data: false
          });
        });
      
      observer.next('logged out');
 
      observer.complete();
    });
  }
  
  updateCurrent(data: Object): Observable<Member> {
    return Observable.create(observer => {
      localforage
        .getItem('currentUser')
        .then(member => {
          
          if (!member) {
            observer.error('No Member Found');
            return observer.complete();
          }
          
          this.updateById(member.id, data)
            .subscribe(updated => {
              localforage
                .setItem('currentUser', updated)
                .then(() => {
                  observer.next(updated);
                  observer.complete();
                });
            });
                 
        })
        .catch(error => observer.error(error)); 
    });
  }

  getCurrent(): Observable<Member | Boolean>  {
    return Observable.create(observer => {
      localforage
        .getItem('currentUser')
        .then(member => {
          
          if (!member) {
            observer.next(false);
            return;
          }
          
          if (Object.keys(member).length > 1) {
            observer.next(member);
          } else {
            this.findById(member.id)
              .subscribe(
                memberFound => observer.next(memberFound),
                error => {
                  this.logout()
                    .subscribe(() => {
                      observer.next(false);
                      observer.complete();
                    });
                }
              );
          }
              
          this.events.subscribe(event => {
            if (event.type === 'update' && event.data.id === member.id) {
              observer.next(event.data);
            }
          });
        })
        .catch(error => observer.error(error)); 
        
      this.events.subscribe(event => {
        if (event.type === 'auth') {
          observer.next(event.data);
        }
      });
      
      return () => {
        this.events.unsubscribe();
      }
    });
  }
}
