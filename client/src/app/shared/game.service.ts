import { Injectable } from '@angular/core';
import { LoopbackService } from './loopback.service';

// Old ES5 syntax for module that doesn't export correctly
declare var require: any
const localforage:LocalForage = require('localforage');

@Injectable()
export class GameService {

  constructor(
     private _loopback: LoopbackService
  ) {}
  
  //create, find, findOne, update, delete, findOrCreate, updateAll (put + query).
  //destroyById, destroyAll (remove all related data).
  //softDestroy (deletedAt in the model).
  
  create() {
    
  }
  
  

}
