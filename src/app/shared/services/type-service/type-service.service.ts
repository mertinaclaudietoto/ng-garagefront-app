import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { TypeService } from '../../models/type-service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {
  private url = environement.apiUrl + 'service01';
  constructor(private http: HttpClient) { }

  getAllTypeService(): Observable<TypeService[]> {
    return this.http.get<TypeService[]>(this.url);
  }

  deleteTypeService(id: string) {
    return this.http.delete<TypeService>(`${this.url}/${id}`);
  }

  saveTypeService(typeSerivce: Partial<TypeService>): Observable<TypeService> {
    return this.http.post<TypeService>(this.url, typeSerivce);
  }

  updateTypeService(id: string, typeSerivce: Partial<TypeService>): Observable<TypeService> {
    return this.http.put<TypeService>(`${this.url}/${id}`, typeSerivce);
  }
}
