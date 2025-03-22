import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarSize } from '../../../shared/models/carSize.model';

@Injectable({
  providedIn: 'root'
})
export class CarSizeService {
  private url = environement.apiUrl + 'sizes';
  constructor(private http: HttpClient) { }

  getAllCarSizes(): Observable<CarSize[]> {
    return this.http.get<CarSize[]>(this.url);
  }

  deleteCarType(id: string) {
    return this.http.delete<CarSize>(`${this.url}/${id}`);
  }

  saveCarSize(carSize: Partial<CarSize>): Observable<CarSize> {
    return this.http.post<CarSize>(this.url, carSize);
  }

  updateCarSize(id: string, carSize: Partial<CarSize>): Observable<CarSize> {
    return this.http.put<CarSize>(`${this.url}/${id}`, carSize);
  }
}
