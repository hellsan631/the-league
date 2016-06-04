import { Injectable, EventEmitter } from '@angular/core';
import { Promise } from 'es6-shim';

declare var require: any
const swal: any = require('sweetalert2');

@Injectable()
export class LoggerService {
  events = new EventEmitter();

  constructor() { }

  dialogSuccess(title: String, text?: String): Promise<any> {
    
    //emit modal open event;
    this.events.emit({value: 'open'});
    
    return swal({
      title: title,
      type: 'success',
      text: text || 'nice'
    })
    .then((result) => {
      this.events.emit({value: 'close'});
      return Promise.resolve(result);
    });
  }
  
  dialogError(title: String, text?: String): Promise<any> {
    this.events.emit({value: 'open'});
    
    return swal({
      title: title,
      type: 'error',
      text: text
    })
    .then((result) => {
      this.events.emit({value: 'close'});
      return Promise.resolve(result);
    });
  }
  
  dialogWarning(title: String, text?: String): Promise<any> {
    this.events.emit({value: 'open'});
    
    return swal({
      title: title,
      type: 'warning',
      text: text
    })
    .then((result) => {
      this.events.emit({value: 'close'});
      return Promise.resolve(result);
    });
  }
  
  dialogInfo(title: String, text?: String): Promise<any> {
    this.events.emit({value: 'open'});
    
    return swal({
      title: title,
      type: 'info',
      text: text
    })
    .then((result) => {
      this.events.emit({value: 'close'});
      return Promise.resolve(result);
    });
  }
  
  dialogConfirm(title: String, text?: String, confirmText?: String, cancelText?: String): Promise<any> {
    this.events.emit({value: 'open'});
    
    return swal({
      title: title,
      type: 'warning',
      text: text,
      reverseButtons: true,
      confirmButtonText: confirmText || 'Yes',
      showCancelButton: true,
      cancelButtonText: cancelText || 'No'
    })
    .then((result) => {
      this.events.emit({value: 'close'});
      return Promise.resolve(result);
    });
  }
  
  info(message: String, data?: Object) {
    console.log(message, data);
  }
  
  success(message: String, data?: Object) {
    console.log(message, data);
  }
  
  error(message: String, data?: Object) {
    console.error(message, data);
  }
}

