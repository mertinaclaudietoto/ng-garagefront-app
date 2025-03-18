import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdName } from '../class/car-type';
import { Car } from '../class/car';
import { environement } from '../../environement/environement';
const headers = new HttpHeaders().set("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environement.apiUrl;
 
  constructor(private http: HttpClient) {}
  getCar():Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl+'cars');
  }
  modifOrAddCar(value:Car) :Observable<Car>{
    if(value._id!=undefined){
      return this.http.put<Car>(`${this.apiUrl}${'cars'}/${encodeURIComponent(value._id)}`, value,{headers})
    }else{
      return this.http.post<Car>(this.apiUrl+'cars',value) ;
    }
  }

  deleteCar(value:Car|undefined):Observable<void>{
    if(value!=undefined){
      return this.http.delete<void>(this.apiUrl+"cars/"+value._id) ;
    }
    return new Observable<void>;
  }

  getCarType(index:string): Observable<IdName[]> {
    return this.http.get<IdName[]>(this.apiUrl+index);
  }


  modifOrAddCarType(indexd:string,value:IdName): Observable<IdName>{
    if(value._id!=undefined){
      return this.http.put<IdName>(`${this.apiUrl}${indexd}/${encodeURIComponent(value._id)}`, value,{headers})
    }else{
      return this.http.post<IdName>(this.apiUrl+indexd,value) ;
    }
  }
  deleteCarType(indexd:string,value:IdName):Observable<void>{
    return this.http.delete<void>(this.apiUrl+indexd+"/"+value._id) ;
  }
}
