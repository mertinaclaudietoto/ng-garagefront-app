import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { Emp } from '../../class/emp';
import { EmpService } from '../../service/emp.service';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:Emp = new Emp();
  email: string = '';
  password: string = '';
  checked: boolean = false;
  constructor(private empService: EmpService) {
    this.login.login='';
    this.login.password='';

  }
  onlogin(){
   this.empService.login(this.login).subscribe(response=>console.log(response))                       
  }
  
}
