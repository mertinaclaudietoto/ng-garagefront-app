import { Component } from '@angular/core';
import { StatswidgetComponent } from "../statswidget/statswidget.component";
import { CommonModule } from '@angular/common';
import { ServiceClient } from '../../../../shared/models/servicesclient';
import { ServicesClientService } from '../../../../shared/services/services-client.service';

import { TableModule } from 'primeng/table';
import { Emp } from '../../../../shared/models/emp';
import { EmpService } from '../../../costumers/services/emp.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { Service } from '../../../../shared/models/service.model';
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ServiceDetail } from '../../../../shared/models/det-serviceclient';

@Component({
  selector: 'app-dashboard',
  imports: [TagModule,StatswidgetComponent,CommonModule,TableModule,DialogModule,ButtonModule,FormsModule,SelectModule,DropdownModule,CheckboxModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  nbrCostumer:number=0;
  nbrMechanic:number=0;
  display:boolean=false;
  displayView:boolean=false;
  checkboxValue:boolean=false;
  nbrTacheencours:number=0;
  nbrTacheenAttent:number=0;
  nbrEmployeedispo:number=0;
  listClientEnAttent!:ServiceClient[];
  listClientProgress!:ServiceClient[];
  listFreeMechanic!:Emp[];
  
  detServiceClient!:ServiceClient;
  avancementServiceClient!:ServiceClient;


  constructor(private serviceclientService :ServicesClientService,private empService:EmpService){}
  ngOnInit() {
    this.relaod();
    this.serviceclientService.getProgress().subscribe(response=>{
      this.listClientProgress=response
      this.nbrTacheencours=response.length;
    },error =>{console.log(error)})
    this.serviceclientService.getFreeMechanic().subscribe(response=>{this.listFreeMechanic=response
      this.nbrEmployeedispo=response.length;
    },error =>{console.log(error)})
    this.empService.getNombreCategorieUser("000000000000000000000002").subscribe(response=>{
      this.nbrCostumer=response;
    },error =>{console.log(error)})
    this.empService.getNombreCategorieUser("000000000000000000000003").subscribe(response=>{
      this.nbrMechanic=response;
    },error =>{console.log(error)})
  }
  setUpdateValue(carType:ServiceClient){
      this.detServiceClient=carType;
      this.display=true;
  }
  relaod(){
    this.serviceclientService.getWainting().subscribe(response=>{this.listClientEnAttent=response
      this.nbrTacheenAttent=response.length;
    },error =>{console.log(error)})
  }

  modifOrAdd(value:ServiceClient){
    value.datedebut=new Date();
    console.log(value)
    this.serviceclientService.modifOrAdd(value).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête POST OR PUT :", error);
    }
    );
  }
  getAvancement(product: ServiceClient): number {
    return product?.detail ? product.detail.filter(value => value.datefin === null).length : 0;
  }
  setViewDetaille(carType:ServiceClient){
    this.avancementServiceClient=carType;
    this.displayView=true;
  }
  trueFalse(product: ServiceDetail): boolean {
    return product.datefin==null ? false : true;
  }


}