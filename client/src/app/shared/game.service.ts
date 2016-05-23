import { Injectable } from '@angular/core';
import { LoopbackService } from './loopback.service';
import { Game } from './models/game.model';
import { LoopbackInterface } from './loopback.interface';
import { Observable } from 'rxjs/Observable';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

export const GAME_URL = 'api/game'

@Injectable()
export class GameService implements LoopbackInterface {

  constructor(
    private _loopback: LoopbackService
  ) { }

  //@TODO: Add findOrCreate function

  create(data: Game): Observable<Game> {
    return this._loopback.post(GAME_URL, data);
  }
  
  find(filter: Object): Observable<Array<Game>> {
    return this._loopback.get(GAME_URL, filter);
  }
  
  findOne(filter: Object): Observable<Game> {
    return this._loopback.get(`${GAME_URL}/findOne`, filter);
  }
  
  updateById(id: string, data: Object): Observable<Game> {
    return this._loopback.put(`${GAME_URL}/${id}`, data);
  }
  
  updateAll(filter: Object, data: Object): Observable<any> {
    return this._loopback.put(`${GAME_URL}/update`, data, filter);
  }
  
  destroyById(id: string): Observable<any> {
    return this._loopback.delete(`${GAME_URL}/${id}`);
  }
}
