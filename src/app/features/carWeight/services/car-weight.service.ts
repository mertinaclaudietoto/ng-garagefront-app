import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarWeight } from '../../../shared/models/carWeight.model';

@Injectable({
  providedIn: 'root'
})
export class CarWeightService {
  private url = environement.apiUrl + 'weigths';
  constructor(private http: HttpClient) { }

  getAllCarWeights(): Observable<CarWeight[]> {

    return this.http.get<CarWeight[]>(this.url);
  }
}
