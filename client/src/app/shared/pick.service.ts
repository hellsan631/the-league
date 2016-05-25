import { Injectable } from '@angular/core';
import { LoopbackService, LoopbackProvider } from '../loopback/index';
import { Pick } from './models/index';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage: LocalForage = require('localforage');

@Injectable()
export class PickService extends LoopbackService {

  constructor(public _loopback: LoopbackProvider) {
    super('api/picks', _loopback);
  }

}
