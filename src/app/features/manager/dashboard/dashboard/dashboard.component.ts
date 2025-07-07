import { Component } from '@angular/core';
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
import { CalendarComponent } from '../../../calendar/calendar.component';

export interface staticWidget {
  name: string,
  value: number,
  icone:string,
}

@Component({
  selector: 'app-dashboard',
  imports: [TagModule,CommonModule,TableModule,DialogModule,ButtonModule,FormsModule,SelectModule,DropdownModule,CheckboxModule,CalendarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  listevaluestat: staticWidget[] = [
    {name:"Tache en attente",value:0,icone:'pi pi-spinner-dotted text-yellow-500 !text-xl'},
    {name:"Tache en cours",value:0,icone:'pi pi-stopwatch text-yellow-500 !text-xl'},
    {name:"Mecanicien",value:0,icone:'pi pi-users text-yellow-500 !text-xl'},
    {name:"Clients ",value:0,icone:'pi pi-users text-yellow-500 !text-xl'},
  ] 
  listClientEnAttent!:ServiceCostumer[];
  listClientProgress!:ServiceCostumer[];
  listFreeMechanic!: Emp[];
  checkboxValue:boolean=false;
  
  detServiceCostumer!:ServiceCostumer;
  avancementServiceCostumer!:ServiceCostumer;

  viewDetaille!:ServiceCostumer;
  errorMessage:string='';

  constructor(private ServiceCostumerService :ServicesClientService,private empService:EmpService,private snackBar: MatSnackBar){}
  ngOnInit() {
    this.relaod();
    this.empService.getNombreCategorieUser(RULE.costumer).subscribe(response=>{
      this.listevaluestat[3].value=response.data??0;
    },error =>{console.log(error)})

    this.empService.getlistByRule(RULE.mechanic).subscribe(response=>{
      this.listevaluestat[2].value=response.data?.length??0;
      this.listFreeMechanic=response.data??[];
    },error =>{console.log(error)})
  }
  
  relaod(){
    this.ServiceCostumerService.getEtatsService(1).subscribe(response=>{this.listClientEnAttent=response.data??[]
      this.listevaluestat[0].value=response.data?.length??0 ;
    },error =>{console.log(error)})
    this.ServiceCostumerService.getEtatsService(2).subscribe(
      response=>{
        if(response.status==='success'){
          this.listClientProgress=response.data??[]
          this.listevaluestat[1].value=response.data?.length??0 ;
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
  trueFalse(product: ServiceDetail): boolean {
    return product.datefin==null ? false : true;
  }
  isEmp(obj: any): obj is Emp {
    return typeof obj === 'object' && obj !== null && 'name' in obj;
  }
  

}