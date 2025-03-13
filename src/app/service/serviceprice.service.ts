import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePrice } from '../class/servicePirce';
import { environement } from '../../environement/environement';
@Injectable({
  providedIn: 'root'
})
export class ServicepriceService {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) {}
  getServicePrice():Observable<ServicePrice[]> {
    return this.http.get<ServicePrice[]>(this.apiUrl+'serviceprices');
  }
}

