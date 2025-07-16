import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../../../../shared/models/emp';
import { environement } from '../../../../../environement/environement';
import { Loginm } from '../../../../shared/models/loginm';
import { ApiResponse } from '../../../../shared/models/Apiresponse';
export interface ensembleServiceCar {
  _id:string,
  nameofcar: string,
  description: string,
  picture: string,
  time: bigint,
  price:bigint,
}
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) { }

  getList(skip:number,limit:number): Observable<ApiResponse<ensembleServiceCar[]>> {
    return this.http.get<ApiResponse<ensembleServiceCar[]>>(this.apiUrl + 'servicecars/ensemble-service-by-car?skip='+skip+'&limit='+limit);
  }

  
}




