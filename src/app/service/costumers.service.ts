import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../class/emp';
import { environement } from '../../environement/environement';
import { Loginm } from '../class/loginm';
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
