import { Injectable } from '@angular/core';
import { LoopbackService } from './loopback.service';
import { Game } from './models/game.model';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

export const GAME_URL = 'api/game'

@Injectable()
export class GameService {

  constructor(
    private _loopback: LoopbackService
  ) { }

  //@TODO: Add findOrCreate function

  create(data: Game) {
    return this._loopback.post(GAME_URL, data);
  }
  
  find(filter: Object) {
    return this._loopback.get(GAME_URL, filter);
  }
  
  findOne(filter: Object) {
    return this._loopback.get(`${GAME_URL}/findOne`, filter);
  }
  
  updateById(id: string, data: Object) {
    return this._loopback.put(`${GAME_URL}/${id}`, data);
  }
  
  updateAll(filter: Object, data: Object) {
    return this._loopback.put(`${GAME_URL}/update`, data, filter);
  }
  
  destroyById(id: string) {
    return this._loopback.delete(`${GAME_URL}/${id}`);
  }
}
