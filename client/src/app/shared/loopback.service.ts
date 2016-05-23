import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoopbackService {

  constructor(private _http: Http) {}
  
  get(url, filter) {
    return this._http.get(url + '?filter=' + filter)
      .map((res: Response) => res.json());
  }

}
