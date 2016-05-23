import { Injectable } from '@angular/core';
import { LoopbackService } from './loopback.service';
import { Game } from './models/game.model';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

@Injectable()
export class GameService extends LoopbackService {

  BASE_URL = 'api/game'
  
}
