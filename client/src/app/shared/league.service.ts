import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { League } from './models/index';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: any = require('localforage');

@Injectable()
export class LeagueService extends LoopbackService {

  constructor(public _loopback: LoopbackProvider) {
    super('api/leagues', _loopback);
  }

}