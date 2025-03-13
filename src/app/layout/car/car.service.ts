import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdName } from './car-type/car-type';


import { CARLIST } from './data-car';
import { Car } from './car';
import { environement } from '../../../environement/environement';

const headers = new HttpHeaders().set("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environement.apiUrl;
 
  constructor(private http: HttpClient) {}
  getCar():Car[]{
    return CARLIST;
  }
  modifOrAddCar(value:Car){
    const index = CARLIST.findIndex(car => car._id=== value._id);
    if (index !== -1) {
      CARLIST[index] = value;
    } else {
      value._id= Math.max(...CARLIST.map(car => car._id)) + 1;
      CARLIST.push(value);
    }
  }
  // getPokemonList(): Observable<PokemonList> {
  //   return this.http.get<PokemonList>(this.POKEMON_API_URL);
  // }
  deleteCar(value:Car){
    const index = CARLIST.findIndex(car => car._id=== value._id);
    if (index !== -1) {
      CARLIST.splice(index, 1);
    }
  }

  getCarType(index:string): Observable<IdName[]> {
    return this.http.get<IdName[]>(this.apiUrl+index);
  }


  modifOrAddCarType(indexd:string,value:IdName): Observable<IdName>{
    if(value._id!=undefined){
      console.log("dedede123");
      return this.http.put<IdName>(`${this.apiUrl}${indexd}/${encodeURIComponent(value._id)}`, value,{headers})
    }else{
      console.log("dedede");
      return this.http.post<IdName>(this.apiUrl+indexd,value) ;
    }
  }
  deleteCarType(indexd:string,value:IdName):Observable<void>{
    return this.http.delete<void>(this.apiUrl+indexd+"/"+value._id) ;
  }
}
