import { Injectable } from '@angular/core';
import { environement } from '../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceClient } from '../models/servicesclient';

@Injectable({
  providedIn: 'root'
})
export class ServicesClientService {
    private apiUrl = environement.apiUrl;
   
    constructor(private http: HttpClient) {}
// token manager
    getWainting():Observable<ServiceClient[]> {
      return this.http.get<ServiceClient[]>(this.apiUrl+'services-client/service-in-waiting');
    }

    getCar():Observable<ServiceClient[]> {
      return this.http.get<ServiceClient[]>(this.apiUrl+'services-client');
    }
    modifOrAdd(value:ServiceClient) :Observable<ServiceClient>{
      if(value._id!=undefined){
        return this.http.put<ServiceClient>(`${this.apiUrl}${'services-client'}/${encodeURIComponent(value._id)}`, value)
      }else{
        return this.http.post<ServiceClient>(this.apiUrl+'services-client',value) ;
      }
    }
    delete(value:ServiceClient|undefined):Observable<void>{
      if(value!=undefined){
        return this.http.delete<void>(this.apiUrl+"services-client/"+value._id) ;
      }
      return new Observable<void>;
    }
  
  
  
  

}
