import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { Emp } from '../../shared/models/emp';
import { EmpService } from '../../features/costumers/services/emp.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { roles } from '../guard/RULE';
import { FirebaseNotifService } from '../../shared/services/firebasenotif/firebase-notif.service';
@Component({
  selector: 'app-login',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:Emp = new Emp();
  email: string = '';
  password: string = '';
  checked: boolean = false;
  column:number =-1;
  constructor(private empService: EmpService,private router:Router,private tokenFCM:FirebaseNotifService) {
    this.login.login='';
    this.login.password='';
  }
  onlogin() {
    this.empService.login(this.login).subscribe(
      response => {
        const tokenFCM = localStorage.getItem("tokenFCM");
  
        // Vérifie que le tokenFCM existe avant d'essayer de l'enregistrer
        if (tokenFCM) {
          const dataFCM = {
            token: tokenFCM,
            idrule: response.idrule,
            iduser: response.iduser,
            expire: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24h plus tard
          };
  
          this.tokenFCM.saveTokenFCM(dataFCM).subscribe(
            res => console.log('FCM Token enregistré:', res),
            err => console.error('Erreur d\'enregistrement FCM:', err)
          );
        }
  
        // Stockage local
        localStorage.setItem('token', response.token);
        localStorage.setItem('image', response.picture);
        localStorage.setItem('iduser', response.iduser);
        localStorage.setItem('idrule', response.idrule);
        localStorage.setItem('panier', JSON.stringify([]));
        localStorage.setItem('panierlist', JSON.stringify([]));
  
        // Redirection selon le rôle
        switch (response.idrule) {
          case roles.costumer:
            this.router.navigate(['/client/service-view']);
            break;
          case roles.manager:
            this.router.navigate(['/manager/dashboard']);
            break;
          case roles.mechanic:
            this.router.navigate(['/mechanic']);
            break;
          default:
            console.warn('Rôle non reconnu, redirection par défaut.');
            this.router.navigate(['/']);
        }
      },
      error => {
        console.error('Erreur de connexion:', error);
        if (error.error && error.error.column) {
          this.column = +error.error.column;
        }
      }
    );
  }
  
}