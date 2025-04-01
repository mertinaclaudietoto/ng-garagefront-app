import { Injectable } from '@angular/core';
import { environement } from '../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { IdName } from '../models/car-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SexService {
  private apiUrl = environement.apiUrl + "sexs";

  constructor(private http: HttpClient) { }

  getAllSexe(): Observable<IdName[]> {
    return this.http.get<IdName[]>(this.apiUrl);
  }
}
