import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LoopbackProvider {
  DEV_PORT = 3000;

  constructor(private _http: Http) {}
  
  get(url: String, filter?: Object): Observable<any> {
    return this._http.get(
        this._parseApiUrl(url, filter),
        this._getAuthHeaders()
      )
      .map((res: Response) => res.json());
  }
  
  post(url: String, data: Object, filter?: Object): Observable<any> {
    return this._http.post(
        this._parseApiUrl(url, filter), 
        JSON.stringify(data),
        this._getAuthHeaders()
      )
      .map((res: Response) => res.json());
  }
  
  put(url: String, data: Object, filter?: Object): Observable<any> {
    return this._http.put(
        this._parseApiUrl(url, filter), 
        JSON.stringify(data),
        this._getAuthHeaders()
      )
      .map((res: Response) => res.json());
  }
  
  delete(url: String, filter?: Object): Observable<any> {
    return this._http.delete(
        this._parseApiUrl(url, filter),
        this._getAuthHeaders()
      )
      .map((res: Response) => res.json());
  }
  
  head(url: String, filter?: Object): Observable<any> {
    return this._http.head(
        this._parseApiUrl(url, filter),
        this._getAuthHeaders()
      )
      .map((res: Response) => res.json());
  }
  
  
  // Stringifies and adds the filter where necessary
  _parseApiUrl(url: String, filter?: Object): string {
    let apiUrl = `${this._getOrigin()}/${url}`;
    
    if (filter) {     
      apiUrl += `?filter=${JSON.stringify(filter)}`;
    }
    
    return apiUrl;
  }
  
  // Modifies our api url origin if we are in a localhost environment
  _getOrigin(): string {
    let origin = `${location.protocol}//${location.hostname}`;
    
    if (origin.includes('localhost'))
      return origin + ':' + this.DEV_PORT;
      
    return origin;
  }
  
  _getAuthHeaders(): Object {
    let headers   = new Headers();
    let authToken = localStorage.getItem('authToken');
 
    // Don't know exactly why this should be done?
    headers.append('Content-Type', 'application/json');
    
    if (authToken) {
      headers.append('Authorization', `Bearer ${authToken}`);
    }
    
    return { headers: headers };
  }

}
