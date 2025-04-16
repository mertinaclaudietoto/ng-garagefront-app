import { Injectable } from '@angular/core';
import { environement } from '../../../environement/environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCostumer } from '../models/servicesclient';
import { Emp } from '../models/emp';
import { ApiResponse } from '../models/Apiresponse';
import { Datachart } from '../../features/manager/dashboard/statistique/chartdemo';

export interface avarageTimeEmp{
  _id:string,
  mechanicId:string,
  avarageTime:number,
  name:string,
  firstname:string,
  picture:string
}
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
    getRevenu(value:string): Observable<ApiResponse<Datachart[]>> {
      return this.http.get<ApiResponse<Datachart[]>>(`${this.apiUrl}servicecostumers/revenue/${value}`);
    }

    getReservation(value:string): Observable<ApiResponse<Datachart[]>> {
      return this.http.get<ApiResponse<Datachart[]>>(`${this.apiUrl}servicecostumers/reservations/${value}`);
    }

    getAvarageTime(): Observable<ApiResponse<avarageTimeEmp[]>> {
      return this.http.get<ApiResponse<avarageTimeEmp[]>>(`${this.apiUrl}servicecostumers/average-time`);
    }
    getDetailleService(id:string|null): Observable<ApiResponse<ServiceCostumer>> {
      return this.http.get<ApiResponse<ServiceCostumer>>(`${this.apiUrl}servicecostumers/service-detaille/${id}`);
    }


    
    getCar():Observable<ServiceCostumer[]> {
      return this.http.get<ServiceCostumer[]>(this.apiUrl+'services-client');
    }
    modifOrAdd(value:ServiceCostumer) : Observable<ApiResponse<ServiceCostumer>> {
      const token = localStorage.getItem('token'); 
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
      if(value._id!=undefined){
        return this.http.put<ApiResponse<ServiceCostumer>>(this.apiUrl+'servicecostumers/'+value._id, value,{headers})
      }else{
        return this.http.post<ApiResponse<ServiceCostumer>>(this.apiUrl+'servicecostumers',value,{headers}) ;
      }

    }
    delete(value:ServiceCostumer|undefined):Observable<void>{
      if(value!=undefined){
        return this.http.delete<void>(this.apiUrl+"servicecostumers/"+value._id) ;
      }
      return new Observable<void>;
    }
  
  
  
  

}
