import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Team } from './models/index';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

@Injectable()
export class TeamService extends LoopbackService {

  constructor(public _loopback: LoopbackProvider) {
    super('api/teams', _loopback);
  }

}




