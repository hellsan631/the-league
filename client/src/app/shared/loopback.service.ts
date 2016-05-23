import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoopbackService {
  DEV_PORT = 3000;

  constructor(private _http: Http) {}
  
  get(url, filter) {
    return this._http.get(this._parseApiUrl(url, filter))
      .map((res: Response) => res.json());
  }
  
  post(url, data, filter) {
    return this._http.post(this._parseApiUrl(url, filter), data)
      .map((res: Response) => res.json());
  }
  
  put(url, data, filter) {
    return this._http.put(this._parseApiUrl(url, filter), data)
      .map((res: Response) => res.json());
  }
  
  
  // Stringifies and adds the filter where necessary
  _parseApiUrl(url, filter) {
    let apiUrl = this._getOrigin() + '/' + url;
    
    if (filter) {
      if(typeof filter === 'object') {
        filter = JSON.stringify(filter);
      }
      
      apiUrl += '?filter=' + filter;
    }
    
    return apiUrl;
  }
  
  // Modifies our api url origin if we are in a localhost environment
  _getOrigin() {
    let origin = location.protocol + '//' + location.hostname;
    
    if (origin.includes('localhost'))
      return origin + ':' + this.DEV_PORT;
      
    return origin;
  }

}
