import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Game } from './models/game.model';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: any = require('localforage');

@Injectable()
export class GameService extends LoopbackService {

  constructor(public _loopback: LoopbackProvider) {
    super('api/game', _loopback);
  }
  
}
