import { Injectable, EventEmitter } from '@angular/core';

declare var require: any
const swal: any = require('sweetalert2');

@Injectable()
export class LoggerService {
  events = new EventEmitter();

  constructor() { }

  dialogSuccess(title: String, text?: String): Promise<any> {
    
    //emit modal open event;
    return swal({
      title: title,
      type: 'success',
      text: text || 'nice'
    })
    .finally(()=> {
      //emit close event
    })
  }
  
  dialogError(title: String, text?: String): Promise<any> {
    return swal({
      title: title,
      type: 'error',
      text: text
    })
  }
  
  dialogWarning(title: String, text?: String): Promise<any> {
    return swal({
      title: title,
      type: 'warning',
      text: text
    })
  }
  
  dialogInfo(title: String, text?: String): Promise<any> {
    return swal({
      title: title,
      type: 'info',
      text: text
    })
  }
  
  dialogConfirm(title: String, text?: String, confirmText?: String, cancelText?: String): Promise<any> {
    return swal({
      title: title,
      type: 'warning',
      text: text,
      reverseButtons: true,
      confirmButtonText: confirmText || 'Yes',
      showCancelButton: true,
      cancelButtonText: cancelText || 'No'
    })
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

