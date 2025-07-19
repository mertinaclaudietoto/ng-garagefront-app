
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environement } from '../../../../../environement/environement';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../shared/models/Apiresponse';


export interface Opinion {
    _id: string,
    name:  string,
    firstname: string,
    picture:  string,
    message:string,
    date:string
}
export interface Opinionadd {
    costumer: String,
    message: String,
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = environement.apiUrl;
  constructor(private http: HttpClient) { }
  // liste opinion
  //post opinion
  add(value:Opinionadd ): Observable<ApiResponse<Opinionadd>> {
          return this.http.post<ApiResponse<Opinionadd>>(`${this.apiUrl}${'opinions'}`, value)
    }
  //delete opinion
  deleteValue(id: string): Observable<void> {
      return this.http.delete<void>(this.apiUrl + "opinions/" + id);
  }
  //filtre by all  and id
  getListe(id :string): Observable<ApiResponse<Opinion[]>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ApiResponse<Opinion[]>>(
      `${this.apiUrl}opinions/filtre?id=${id}`, 
      { headers }
    );
  } 

}

