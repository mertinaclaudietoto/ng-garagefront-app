import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../../shared/models/emp';
import { environement } from '../../../environement/environement';
import { Loginm } from '../../shared/models/loginm';
@Injectable({
  providedIn: 'root'
})
export class CostumersService {
  private apiUrl = environement.apiUrl;
  constructor(private http: HttpClient) {}
  register(value:Emp):Observable<string>{
    return this.http.post<string>(this.apiUrl+'register', value);
  }
}
