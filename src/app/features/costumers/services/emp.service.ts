import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../../../shared/models/emp';
import { environement } from '../../../../environement/environement';
import { Loginm } from '../../../shared/models/loginm';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) { }

  getNombreCategorieUser(id: string): Observable<number> {
    return this.http.get<number>(this.apiUrl + 'emps/nbrcostumers/' + id);
  }

  get(id: string): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.apiUrl + 'emps/findbyrule/' + id);
  }

  getEmp(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.apiUrl + 'emps');
  }

  modifOrAddCar(value: Emp): Observable<Emp> {
    if (value._id != undefined) {
      return this.http.put<Emp>(`${this.apiUrl}${'emps'}/${encodeURIComponent(value._id)}`, value)
    } else {
      return this.http.post<Emp>(this.apiUrl + 'emps', value);
    }
  }

  deleteCar(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "emps/" + id);
  }

  login(value: Emp): Observable<Loginm> {
    return this.http.post<Loginm>(this.apiUrl + 'emps/login', value);
  }

  getById(id: string): Observable<Emp> {
    return this.http.get<Emp>(this.apiUrl + 'emps/' + id);
  }
}




