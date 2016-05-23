import { Observable } from 'rxjs/Observable';

export interface LoopbackInterface {
  //@TODO Add findOrCreate function
  
  create(data: Object): Observable<any>
  
  find(filter?: Object): Observable<any>
  
  findOne(filter: Object): Observable<any>
  
  findById(id: string): Observable<any>
  
  updateById(id: string, data: Object): Observable<any>
  
  updateAll(filter: Object, data: Object): Observable<any>
  
  destroyById(id: string): Observable<any>
}