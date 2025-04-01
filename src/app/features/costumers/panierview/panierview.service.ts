import { Injectable } from '@angular/core';
import { environement } from '../../../../environement/environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { detserviceClient } from '../serviceview/serviceview.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierviewService {
  private apiUrl = environement.apiUrl;
  constructor(private http: HttpClient) {}

  savePanier(value:detserviceClient|[]):Observable<detserviceClient> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.post<detserviceClient>(this.apiUrl+'servicecostumers',value, { headers });
  }

  gethistorique(id:string|null,skip:number,limit:number):Observable<detserviceClient[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.get<detserviceClient[]>(this.apiUrl+'servicecostumers/story/'+id+'?skip='+skip+"&&limit="+limit, { headers });
  }
  update(value:detserviceClient|null):Observable<detserviceClient> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    if(value!=null){
      return this.http.put<detserviceClient>(this.apiUrl+'servicecostumers/'+value._id,value, { headers });
    }
    return new Observable<detserviceClient>();
  }

  updateFacture(value:detserviceClient|null):Observable<detserviceClient> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    if(value!=null){
      return this.http.put<detserviceClient>(this.apiUrl+'servicecostumers/facture/'+value._id,value, { headers });
    }
    return new Observable<detserviceClient>();
  }

}
