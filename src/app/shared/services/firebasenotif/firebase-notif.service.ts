import { Injectable } from '@angular/core';
import { SwUpdate,SwPush } from '@angular/service-worker';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environement } from '../../../../environement/environement';
import { initializeApp } from "firebase/app";
import { Observable } from 'rxjs';
const app = initializeApp(environement.firebaseConfig);

interface TokenFCM {
  token: string,
  idrule:string|undefined,
  iduser: string|undefined,
  expire: Date
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseNotifService {
  private apiUrl = environement.apiUrl;

  messaging = getMessaging(app);

  constructor(private swUpdate: SwUpdate, private swPush: SwPush,private http: HttpClient) {
    this.listen();
  }

  private getTokenFromFirebase() {
    getToken(this.messaging, { vapidKey: environement.firebaseConfig.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
          localStorage.setItem('tokenFCM',currentToken);
        } else {
          console.log('Aucun token disponible. Il faut autoriser les notifications.');
        }
      })
      .catch((err) => {
        console.error('Erreur lors de la récupération du token FCM :', err);
      });
  }
  requestPermission() {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          this.getTokenFromFirebase(); 
        } else {
          console.warn('Permission refusée ou ignorée :', permission);
        }
      });
    } else if (Notification.permission === 'granted') {
      this.getTokenFromFirebase();
    } else {
      console.error('Les notifications sont bloquées dans le navigateur. Veuillez les réactiver.');
    }
  }
  
  listen() {
    onMessage(this.messaging, (payload) => {
      if (payload.notification?.title && payload.notification?.body) {
        new Notification(payload.notification.title, {
          body: payload.notification.body,
          icon: payload.notification.icon || 'assets/icons/default-icon.png' // icône par défaut si non fournie
        });
      } else {
        console.warn('Notification invalide : titre ou corps manquant.', payload.notification);
      }
    });
  }
  saveTokenFCM(tokenFCM:TokenFCM):Observable<TokenFCM>{
        return this.http.post<TokenFCM>(this.apiUrl+'tokenFCM',tokenFCM) ;

  }
}
