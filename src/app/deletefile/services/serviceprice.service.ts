import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePrice } from '../../shared/models/servicePrice';
import { environement } from '../../../environement/environement';
@Injectable({
  providedIn: 'root'
})
export class ServicepriceService {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) {}
  getServicePrice():Observable<ServicePrice[]> {
    return this.http.get<ServicePrice[]>(this.apiUrl+'serviceprices');
  }
  modifOrAddCar(value:ServicePrice) :Observable<ServicePrice>{
      if(value._id!=undefined){
        return this.http.put<ServicePrice>(`${this.apiUrl}${'serviceprices'}/${encodeURIComponent(value._id)}`, value)
      }else{
        return this.http.post<ServicePrice>(this.apiUrl+'serviceprices',value) ;
      }
  }
   deleteCar(value:ServicePrice|undefined):Observable<void>{
      if(value!=undefined){
        return this.http.delete<void>(this.apiUrl+"serviceprices/"+value._id) ;
      }
      return new Observable<void>;
    }
    getServicePricePagination(skip:number,limit:number):Observable<ServicePrice[]> {
      return this.http.get<ServicePrice[]>(this.apiUrl+'serviceprices/'+skip+"/"+limit);
    }

    getRows(){
      return this.http.get<number>(this.apiUrl+'serviceprices/rows');
    }
}

