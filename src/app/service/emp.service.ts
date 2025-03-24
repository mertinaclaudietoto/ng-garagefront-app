import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../class/emp';
import { environement } from '../../environement/environement';
import { Loginm } from '../class/loginm';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) {}
  getEmp():Observable<Emp[]> {
    return this.http.get<Emp[]>(this.apiUrl+'emps');
  }
  modifOrAddCar(value:Emp) :Observable<Emp>{
      if(value._id!=undefined){
        return this.http.put<Emp>(`${this.apiUrl}${'emps'}/${encodeURIComponent(value._id)}`, value)
      }else{
        return this.http.post<Emp>(this.apiUrl+'emps',value) ;
      }
  }
  
  deleteCar(value:Emp|undefined):Observable<void>{
        if(value!=undefined){
          return this.http.delete<void>(this.apiUrl+"emps/"+value._id) ;
        }
        return new Observable<void>;
  }
  login(value:Emp):Observable<Loginm>{
    return this.http.post<Loginm>(this.apiUrl+'emps/login', value);
  }

  
}




