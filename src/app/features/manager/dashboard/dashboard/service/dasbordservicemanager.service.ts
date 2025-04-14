import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '../../../../../shared/models/emp';
import { environement } from '../../../../../../environement/environement';
import { Loginm } from '../../../../../shared/models/loginm';
import { ApiResponse } from '../../../../../shared/models/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class DasbordServiceManager {
  private apiUrl = environement.apiUrl;

  constructor(private http: HttpClient) { }

  getNombreCategorieUser(id: string): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(this.apiUrl + 'emps/nbrcostumers/' + id);
  }

}




