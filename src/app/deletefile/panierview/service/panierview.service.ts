import { Injectable } from '@angular/core';

import { environement } from '../../../../environement/environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCostumer } from '../../../shared/models/servicesclient';
import { Emp } from '../../../shared/models/emp';
import { ApiResponse } from '../../../shared/models/Apiresponse';


@Injectable({
  providedIn: 'root'
})
export class PanierviewService {
  private apiUrl = environement.apiUrl;
  constructor(private http: HttpClient) {}

  savePanier(value:ServiceCostumer|undefined):Observable<ApiResponse<ServiceCostumer> > {
    //  console.log(value);
    const id = localStorage.getItem('iduser') ?? '';
    const emp = new Emp();
    emp._id = id;
   if(value!=undefined){
      value.etats=1;
      value.dateappoitement=new Date();
      value.idcostumer= emp;
    }
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.post<ApiResponse<ServiceCostumer>>(this.apiUrl+'servicecostumers',value, { headers });
 
  }

  gethistorique(id:string|null,skip:number,limit:number):Observable<ApiResponse<ServiceCostumer[]>> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.get<ApiResponse<ServiceCostumer[]>>(this.apiUrl+'servicecostumers/story/'+id+'?skip='+skip+"&&limit="+limit, { headers });
  }
  update(value:ServiceCostumer|null):Observable<ServiceCostumer> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    if(value!=null){
      return this.http.put<ServiceCostumer>(this.apiUrl+'servicecostumers/'+value._id,value, { headers });
    }
    return new Observable<ServiceCostumer>();
  }

  updateFacture(value:ServiceCostumer|null):Observable<ServiceCostumer> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    if(value!=null){
      return this.http.put<ServiceCostumer>(this.apiUrl+'servicecostumers/facture/'+value._id,value, { headers });
    }
    return new Observable<ServiceCostumer>();
  }

}
