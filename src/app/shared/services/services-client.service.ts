import { Injectable } from '@angular/core';
import { environement } from '../../../environement/environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCostumer } from '../models/servicesclient';
import { Emp } from '../models/emp';
import { ApiResponse } from '../models/Apiresponse';
import { Revenu } from '../../features/manager/dashboard/statistique/chartdemo';

@Injectable({
  providedIn: 'root'
})
export class ServicesClientService {
    private apiUrl = environement.apiUrl;
    constructor(private http: HttpClient) {}
    

    getFreeMechanic():Observable<Emp[]> {
      return this.http.get<Emp[]>(this.apiUrl+'services-client/free-mechanic');
    }
// token manager

    getEtatsService(etats: number): Observable<ApiResponse<ServiceCostumer[]>> {
      return this.http.get<ApiResponse<ServiceCostumer[]>>(`${this.apiUrl}servicecostumers/etats-service/${etats}`);
    }

    getRevenu(value:string): Observable<ApiResponse<Revenu[]>> {
      return this.http.get<ApiResponse<Revenu[]>>(`${this.apiUrl}servicecostumers/reservations/${value}`);
    }



    getProgress():Observable<ServiceCostumer[]> {
      return this.http.get<ServiceCostumer[]>(this.apiUrl+'services-client/service-in-progress');
    }

    getCar():Observable<ServiceCostumer[]> {
      return this.http.get<ServiceCostumer[]>(this.apiUrl+'services-client');
    }
    modifOrAdd(value:ServiceCostumer) :Observable<ServiceCostumer>{
      const token = localStorage.getItem('token'); 
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
      
      if(value._id!=undefined){
        return this.http.put<ServiceCostumer>(`${this.apiUrl}${'services-client'}/${encodeURIComponent(value._id)}`, value,{headers})
      }else{
        return this.http.post<ServiceCostumer>(this.apiUrl+'services-client',value,{headers}) ;
      }
    }
    delete(value:ServiceCostumer|undefined):Observable<void>{
      if(value!=undefined){
        return this.http.delete<void>(this.apiUrl+"services-client/"+value._id) ;
      }
      return new Observable<void>;
    }
  
  
  
  

}
