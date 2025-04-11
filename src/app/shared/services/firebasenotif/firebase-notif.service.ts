import { Injectable } from '@angular/core';
import { SwUpdate,SwPush } from '@angular/service-worker';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

import { environement } from '../../../../environement/environement';
import { initializeApp } from "firebase/app";
const app = initializeApp(environement.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseNotifService {
  messaging = getMessaging(app);

  constructor(private swUpdate: SwUpdate, private swPush: SwPush) {
    this.listen();
  }

  requestPermission() {
    getToken(this.messaging, { vapidKey: environement.firebaseConfig.vapidKey }).then((currentToken) => {
      if (currentToken) {
        console.log('Notification permission granted.', currentToken);
        // Envoyez ce token à votre serveur pour l'enregistrer et l'utiliser pour envoyer des notifications
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    onMessage(this.messaging, (payload) => {
      console.log('Message received. ', payload);
      // Personnalisez la gestion de la notification ici
    });
  }
}
