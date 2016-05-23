import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoopbackService {
  DEV_PORT = 3000;

  constructor(private _http: Http) {}
  
  get(url, filter) {
    return this._http.get(this._getOrigin() + '/' + url + '?filter=' + filter)
      .map((res: Response) => res.json());
  }
  
  _getOrigin() {
    let origin = location.protocol + '//' + location.hostname;
    
    if (origin.includes('localhost'))
      return origin + ':' + this.DEV_PORT;
      
    return origin;
    
  }

}
