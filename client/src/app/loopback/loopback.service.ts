import { Injectable, Inject } from '@angular/core';
import { LoopbackInterface } from './loopback.interface';
import { LoopbackProvider } from './loopback.provider';

import { Observable } from 'rxjs/Observable';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

@Injectable()
export class LoopbackService implements LoopbackInterface {

  constructor(
    public BASE_URL: string, 
    public _loopback: LoopbackProvider) {
      this.BASE_URL = BASE_URL;
      this._loopback = _loopback;
  }

  create(data: any): Observable<any> {
    return this._loopback.post(this.BASE_URL, data);
  }
  
  find(filter?: Object): Observable<Array<any>> {
    return this._loopback.get(this.BASE_URL, filter);
  }
  
  findOne(filter: Object): Observable<any> {
    return this._loopback.get(`${this.BASE_URL}/findOne`, filter);
  }
  
  findById(id: String): Observable<any> {
    return this._loopback.get(`${this.BASE_URL}/${id}`);
  }
  
  updateById(id: string, data: Object): Observable<any> {
    return this._loopback.put(`${this.BASE_URL}/${id}`, data);
  }
  
  updateAll(filter: Object, data: Object): Observable<any> {
    return this._loopback.put(`${this.BASE_URL}/update`, data, filter);
  }
  
  destroyById(id: string): Observable<any> {
    return this._loopback.delete(`${this.BASE_URL}/${id}`);
  }
}
