import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarType } from '../../../shared/models/carType.model';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {
  private url = environement.apiUrl + 'cartypes';
  constructor(private http: HttpClient) { }

  getAllCartTypes(): Observable<CarType[]> {
    return this.http.get<CarType[]>(this.url);
  }

  deleteCarType(id: string) {
    return this.http.delete<CarType>(`${this.url}/${id}`);
  }

  saveCarType(carType: Partial<CarType>): Observable<CarType> {
    return this.http.post<CarType>(this.url, carType);
  }

  updateCarType(id: string, carType: Partial<CarType>): Observable<CarType> {
    return this.http.put<CarType>(`${this.url}/${id}`, carType);
  }
}
