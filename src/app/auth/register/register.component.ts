import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { Emp } from '../../features/costumers/models/emp';
import { CommonModule } from '@angular/common';
import { CostumersService } from '../../features/costumers/services/costumers.service';
import { CarService } from '../../features/costumers/services/car.service';
import { IdName } from '../../features/costumers/models/car-type';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-register',
  imports: [SelectModule,CommonModule,ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  emp :Emp = new Emp();
  confirm:string='';
  column:number=-1;
  message:string='';
  dropdownItemsSex :IdName[]= [];
  constructor(private costumersService:CostumersService,private carService:CarService){}
  ngOnInit() {
    this.carService.getCarType("sexs").subscribe(table=> {
      this.dropdownItemsSex = table?.map(value=>({name:value.name,_id:value._id}))
    });
  }
  registre(){
    if(this.confirm===this.emp.password){
      this.costumersService.register(this.emp).subscribe(response=>{
        console.log(response)
        this.message=response;
      });
    }else{
      this.column=1;
    }
  }

}
