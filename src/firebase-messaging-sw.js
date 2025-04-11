importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAObf8rmJ4C6Kl4yVgp9gJzkAnZjbT1soU",
    authDomain: "m1p12-mean-mertina-tafitasoa.firebaseapp.com",
    projectId: "m1p12-mean-mertina-tafitasoa",
    storageBucket: "m1p12-mean-mertina-tafitasoa.firebasestorage.app",
    messagingSenderId: "1035347694610",
    appId: "1:1035347694610:web:bbb86ea501c887a30d34cb",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notification reçue en arrière-plan : ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
