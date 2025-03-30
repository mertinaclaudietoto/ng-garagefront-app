import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environement } from '../../../../../environement/environement';
import { Observable } from 'rxjs';

export interface serviceCar {
  _id: string|null;
  picture: string;
  brandandmodel: string;
  servicelist: { 
    idservice: string; 
    price: number; 
    time: number; 
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ServicesCarService {
private apiUrl = environement.apiUrl;
  constructor(private http: HttpClient) {}
  
    getAll(skip: number, limit: number): Observable<serviceCar[]> {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<serviceCar[]>(
        `${this.apiUrl}servicecars/pagination/?skip=${skip}&limit=${limit}`, 
        { headers }
      );
    }  
    modifOrAdd(value:serviceCar) :Observable<serviceCar>{
      const token = localStorage.getItem('token'); 
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
      console.log(token);
      if(value._id!=undefined){
        return this.http.put<serviceCar>(`${this.apiUrl}${'servicecars'}/${encodeURIComponent(value._id)}`, value,{headers})
      }else{
        return this.http.post<serviceCar>(this.apiUrl+'servicecars',value,{headers}) ;
      }
    }
    delete(value:serviceCar|undefined):Observable<void>{
      const token = localStorage.getItem('token'); 
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
      if(value!=undefined){
        return this.http.delete<void>(this.apiUrl+"servicecars/"+value._id,{headers}) ;
      }
      return new Observable<void>;
    }
}
