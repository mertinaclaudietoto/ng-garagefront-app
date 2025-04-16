import { Component } from '@angular/core';
import { StatswidgetComponent } from "../statswidget/statswidget.component";
import { CommonModule } from '@angular/common';
import { ServiceCostumer } from '../../../../shared/models/servicesclient';
import { ServicesClientService } from '../../../../shared/services/services-client.service';
import { TableModule } from 'primeng/table';
import { Emp } from '../../../../shared/models/emp';
import { EmpService } from '../../emp/service/emp.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { Service } from '../../../../shared/models/service.model';
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ServiceDetail } from '../../../../shared/models/det-serviceclient';
import { RULE } from '../../../../shared/data/RULE';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  imports: [TagModule,StatswidgetComponent,CommonModule,TableModule,DialogModule,ButtonModule,FormsModule,SelectModule,DropdownModule,CheckboxModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  nbrCostumer:number=0;
  nbrMechanic:number=0;
  nbrTacheencours:number=0;
  nbrTacheenAttent:number=0;
  nbrEmployeedispo:number=0;

  display:boolean=false;
  displayView:boolean=false;
  checkboxValue:boolean=false;
 
  listClientEnAttent!:ServiceCostumer[];
  listClientProgress!:ServiceCostumer[];
  listFreeMechanic!:Emp[];
  
  detServiceCostumer!:ServiceCostumer;
  avancementServiceCostumer!:ServiceCostumer;

  viewDetaille!:ServiceCostumer;
  errorMessage:string='';

  constructor(private ServiceCostumerService :ServicesClientService,private empService:EmpService,private snackBar: MatSnackBar){}
  ngOnInit() {
    this.relaod();
   
    

    this.empService.getNombreCategorieUser(RULE.costumer).subscribe(response=>{
      this.nbrCostumer=response.data??0;
    },error =>{console.log(error)})

    this.empService.getlistByRule(RULE.mechanic).subscribe(response=>{
      this.nbrMechanic=response.data?.length??0;
      this.listFreeMechanic=response.data??[];
    },error =>{console.log(error)})
  }
  setUpdateValue(carType:ServiceCostumer){
    this.ServiceCostumerService. getDetailleService(carType._id).subscribe(response=>{
      console.log(response.data);
      this.viewDetaille=response.data?? carType;
      this.display=true;
    })
  }
  relaod(){
    this.ServiceCostumerService.getEtatsService(1).subscribe(response=>{this.listClientEnAttent=response.data??[]
      this.nbrTacheenAttent=response.data?.length??0 ;
    },error =>{console.log(error)})
    this.ServiceCostumerService.getEtatsService(2).subscribe(
      response=>{
        if(response.status==='success'){
          this.listClientProgress=response.data??[]
          this.nbrTacheencours=response.data?.length??0 ;
        }
    })
  }
  modifOrAdd(value:ServiceCostumer){
    for(let i=0;i<value.serviceList.length;i++){
        if(value.serviceList[i].idmechanic==null || value.serviceList[i].idmechanic==undefined ){
          this.errorMessage="Vous devez atribuer un mechanicien sur tout les tâche avant de valider";
          return ;
        }
    }
    if(value.etats==1){
      console.log(value)
      value.etats=2;
      this.ServiceCostumerService.modifOrAdd(value).subscribe( response => {
        this.snackBar.open(response.status, 'Fermer', {
          duration: 3000, 
          panelClass: ['snackbar-success'] 
        });
        this.relaod();
        this.display=false;
      },
      error => {
        this.snackBar.open("Ereur 500", 'Fermer', {
          duration: 3000, 
          panelClass: ['snackbar-success'] 
        });
        console.error("❌ Erreur lors de l'envoi de la requête POST OR PUT :", error);
      });
    }else{
      this.errorMessage="Vous ne pouvez plus modifier ce services";
    }
  }
  // getAvancement(product: ServiceCostumer): number {
  //   return product?.detail ? product.detail.filter(value => value.datefin === null).length : 0;
  // }
  setViewDetaille(carType:ServiceCostumer){
    this.avancementServiceCostumer=carType;
    this.displayView=true;
  }
  trueFalse(product: ServiceDetail): boolean {
    return product.datefin==null ? false : true;
  }
  isEmp(obj: any): obj is Emp {
    return typeof obj === 'object' && obj !== null && 'name' in obj;
  }
  

}