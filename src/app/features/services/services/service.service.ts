import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Service } from '../../../shared/models/service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = environement.apiUrl + 'services';
  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url);
  }

  deleteService(id: string) {
    return this.http.delete<Service>(`${this.url}/${id}`);
  }

  saveService(carType: Partial<Service>): Observable<Service> {
    return this.http.post<Service>(this.url, carType);
  }

  getServiceById(id: string): Observable<Service> {
    return this.http.get<Service>(`${this.url}/${id}`);
  }

  updateService(id: string, service: Partial<Service>): Observable<Service> {
    return this.http.put<Service>(`${this.url}/${id}`, service);
  }
}
