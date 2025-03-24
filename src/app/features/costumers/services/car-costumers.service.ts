import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environement } from '../../../../environement/environement';
import { CarClient } from '../models/car-client';
@Injectable({
  providedIn: 'root'
})
export class CarCostumersService {
  private apiUrl = environement.apiUrl;
  Id ={};
  constructor(private http: HttpClient) {}
    ngOnInit() {
      this.Id={iduser:localStorage.getItem('iduser'),idrule:localStorage.getItem('idrule')}
    }
  getMine(skip:number,limit:number,id:string|undefined):Observable<CarClient[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 

    return this.http.get<CarClient[]>(this.apiUrl+'car-costumers/'+id+"/"+skip+"/"+limit, { headers });
  }
  getAll():Observable<CarClient[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.get<CarClient[]>(this.apiUrl+'car-costumers/',{headers});
  }
  modifOrAddCar(value:CarClient) :Observable<CarClient>{
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    if(value._id!=undefined){
      return this.http.put<CarClient>(`${this.apiUrl}${'car-costumers'}/${encodeURIComponent(value._id)}`, value,{headers})
    }else{
      return this.http.post<CarClient>(this.apiUrl+'car-costumers',value,{headers}) ;
    }
  }
  deleteCar(value:CarClient|undefined):Observable<void>{
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    if(value!=undefined){
      return this.http.delete<void>(this.apiUrl+"car-costumers/"+value._id,{headers}) ;
    }
    return new Observable<void>;
  }
  getRows(id:string|undefined){
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.get<number>(this.apiUrl+"car-costumers/rows/"+id,{headers}) ;
  }


}
