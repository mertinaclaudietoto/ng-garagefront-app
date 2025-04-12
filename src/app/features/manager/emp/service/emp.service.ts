import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../../../../shared/models/emp';
import { environement } from '../../../../../environement/environement';
import { Loginm } from '../../../../shared/models/loginm';
import { ApiResponse } from '../../../../shared/models/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) { }

  getNombreCategorieUser(id: string): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(this.apiUrl + 'emps/nbrcostumers/' + id);
  }

  get(id: string): Observable<ApiResponse<Emp[]>> {
    return this.http.get<ApiResponse<Emp[]>>(this.apiUrl + 'emps/findbyrule/' + id);
  }

  getEmp(): Observable<ApiResponse<Emp[]>> {
    return this.http.get<ApiResponse<Emp[]>>(this.apiUrl + 'emps');
  }

  modifOrAddCar(value: Emp): Observable<ApiResponse<Emp>> {
    if (value._id != undefined) {
      return this.http.put<ApiResponse<Emp>>(`${this.apiUrl}${'emps'}/${encodeURIComponent(value._id)}`, value)
    } else {
      return this.http.post<ApiResponse<Emp>>(this.apiUrl + 'emps', value);
    }
  }

  deleteCar(id: string|undefined): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "emps/" + id);
  }

  login(value: Emp): Observable<ApiResponse<Loginm>> {
    return this.http.post<ApiResponse<Loginm>>(this.apiUrl + 'emps/login', value);
  }

  getById(id: string): Observable<ApiResponse<Emp>> {
    return this.http.get<ApiResponse<Emp>>(this.apiUrl + 'emps/' + id);
  }
}




