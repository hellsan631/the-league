import { Injectable } from '@angular/core';
import { LoopbackProvider } from './loopback.provider';
import { Game } from './models/game.model';
import { LoopbackInterface } from './loopback.interface';
import { Observable } from 'rxjs/Observable';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

@Injectable()
export class LoopbackService implements LoopbackInterface {
  
  BASE_URL = ''

  constructor(
    private _loopback: LoopbackProvider
  ) { }  

  //@TODO: Add findOrCreate function

  create(data: any): Observable<any> {
    return this._loopback.post(this.BASE_URL, data);
  }
  
  find(filter: Object): Observable<Array<any>> {
    return this._loopback.get(this.BASE_URL, filter);
  }
  
  findOne(filter: Object): Observable<any> {
    return this._loopback.get(`${this.BASE_URL}/findOne`, filter);
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
