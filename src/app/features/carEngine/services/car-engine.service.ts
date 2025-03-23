import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarEngine } from '../../../shared/models/carEngine.model';

@Injectable({
  providedIn: 'root'
})
export class CarEngineService {
  private url = environement.apiUrl + 'cartypes';
  constructor(private http: HttpClient) { }

  getAllCarEngines(): Observable<CarEngine[]> {

    return this.http.get<CarEngine[]>(this.url);
  }
}
