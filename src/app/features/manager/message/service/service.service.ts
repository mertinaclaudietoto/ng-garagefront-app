
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environement } from '../../../../../environement/environement';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../shared/models/Apiresponse';

export interface listuserconv {
  _id:string,
  name: string,
  firstName: string,
  picture: string,
  isConnected: boolean,
  lastConnection: Date|null,
  content: string,
  timestamp: Date|null,
  isRead: boolean,
  isGras: boolean,
  idrule:string
}

export interface Userchat {
  _id: string;
  picture: string;
  name: string;
  firstName: string,
  isConnected: boolean;
  lastConnection: string | null;
}
export interface FiltreButton {
  index: string;
  class: string;
  name: string;
  rule: string;

}


export interface MessageContent {
  content: string;
  timestamp: string; // ou `Date` si tu préfères
  isRead: boolean;
  isLeft: boolean;
}

export interface ChatConversation {
  sender: Userchat |null;
  userConnected: Userchat |null;
  message: MessageContent[];
}

export interface message {
  sender: string,
  receiver: string,
  content: string,
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = environement.apiUrl;
  constructor(private http: HttpClient) { }

  getListeUserConv(id :string): Observable<ApiResponse<listuserconv[]>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ApiResponse<listuserconv[]>>(
      `${this.apiUrl}chats/listechatuser/${id}`, 
      { headers }
    );
  } 
   getUserChat(): Observable<ApiResponse<Userchat[]>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ApiResponse<Userchat[]>>(
      `${this.apiUrl}emps/selectchat`,
      { headers }
    );
  } 

  getConofToUser(sender :string,userconceted:string): Observable<ApiResponse<ChatConversation>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ApiResponse<ChatConversation>>(
      `${this.apiUrl}chats/getconv/${sender}/${userconceted}`, 
      { headers }
    );
  } 
  sendMessage(message :message): Observable<ApiResponse<message>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ApiResponse<message>>(
      `${this.apiUrl}chats/`, 
      message,
      { headers }
    );
  } 


}

