import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EngineType } from '../../../shared/models/engineType.model';

@Injectable({
  providedIn: 'root'
})
export class CarEngineService {
  private url = environement.apiUrl + 'cartypes';
  constructor(private http: HttpClient) { }

  getAllCarEngines(): Observable<EngineType[]> {

    return this.http.get<EngineType[]>(this.url);
  }
}
