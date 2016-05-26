import { Injectable, EventEmitter } from '@angular/core';
import { LoopbackInterface } from './loopback.interface';
import { LoopbackProvider }  from './loopback.provider';
import { Observable }        from 'rxjs/Observable';

@Injectable()
export class LoopbackService implements LoopbackInterface {
  
  public events: EventEmitter<any>;

  constructor(
    public BASE_URL: string, 
    public loopback: LoopbackProvider
  ) {
    this.BASE_URL = BASE_URL;
    this.loopback = loopback;
    this.events   = new EventEmitter();
  }

  create(data: any): Observable<any> {
    return Observable.create(observer => {
      this.loopback.post(this.BASE_URL, data)
        .subscribe(
          response => {
            this._emitEvent('create', response);
            
            observer.next(response);
            
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
    });
  }
  
  find(filter?: Object): Observable<Array<any>> {
    return this.loopback.get(this.BASE_URL, filter);
  }
  
  findOne(filter: Object): Observable<any> {
    return this.loopback.get(`${this.BASE_URL}/findOne`, filter);
  }
  
  findById(id: String): Observable<any> {
    return this.loopback.get(`${this.BASE_URL}/${id}`);
  }
  
  updateById(id: string, data: Object): Observable<any> {
    return Observable.create(observer => {
      this.loopback.put(`${this.BASE_URL}/${id}`, data)
        .subscribe(
          response => {
            this._emitEvent('update', response);
            
            observer.next(response);
            
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
    });
  }
  
  updateAll(filter: Object, data: Object): Observable<any> {   
    return this.loopback.put(`${this.BASE_URL}/update`, data, filter);
  }
  
  destroyById(id: string): Observable<any> {
    return this.loopback.delete(`${this.BASE_URL}/${id}`);
  }
  
  _emitEvent(type: string, data: Object): void {
    this.events.emit({
      type: type,
      base: this.BASE_URL,
      data: data
    });
  }
}
