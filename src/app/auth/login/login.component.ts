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
  constructor(private empService: EmpService,private router:Router) {
    this.login.login='';
    this.login.password='';
  }
  onlogin(){
    this.empService.login(this.login).subscribe(
      response =>{
        console.log(response)
        localStorage.setItem('token', response.token);
        localStorage.setItem('image', response.picture);
        localStorage.setItem('iduser', response.iduser);
        localStorage.setItem('idrule', response.idrule);
        console.log(response.idrule);
        if(response.idrule=="000000000000000000000002"){
          this.router.navigate(['/client/cars-client']);
        }
       
      } ,
      error => console.log('Erreur:',this.column= +error.error.column )
    );                    
  }
}