import { PanierviewService } from './../panierview/panierview.service';
import { serviceprice, ServicesCarService } from './../../manager/services-car/serice/services-car.service';
import { Component } from '@angular/core';
import { CarService } from './../../costumers/services/car.service';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuItem } from 'primeng/api';
// import 
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CarTypeComponent } from '../../../layout/car/car-type/car-type.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Car } from '../../../shared/models/car';
import { IMAGESDEFAULTS } from '../../costumers/dataimage';


// cloudinary

import {fill} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import { serviceCar } from './../../manager/services-car/serice/services-car.service'; 
import { IdName } from '../../../shared/models/car-type';
import { skip, Subscription } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { detserviceClient, serviceList } from '../serviceview/serviceview.component';
import { ServiceviewService } from '../serviceview.service';
import { response } from 'express';

@Component({
  selector: 'app-historique',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule,PaginatorModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss'
})
export class HistoriqueComponent {
  subscriptions : Subscription[] = [];
  servicelist:detserviceClient[]|undefined=undefined;
  modifivalue!:detserviceClient|null;
  index:number=-1;
  display: boolean = false;
  rowIndex:string='';
  first: number = 0;
  rows: number = 10;
  constructor(private panier :PanierviewService) {
  }
  ngOnInit() {
    const userId = localStorage.getItem('iduser');
    this.panier.gethistorique(userId,this.first,this.rows).subscribe(response=>
      this.servicelist =response
    );
  }
  close() {
    this.display = false;
    this.panier.update(this.modifivalue).subscribe(response=>console.log(response));
    this.modifivalue=null;
    this.index=0;
  }
  open(modifivalue:detserviceClient,index:number) {
    this.modifivalue=modifivalue;
    this.index=index;
    this.display = true;
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  onPageChange(event: PaginatorState) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? 10;
  }
  savePanier(){
    if (typeof localStorage !== 'undefined') {
      this.panier.savePanier(JSON.parse(localStorage.getItem('panier') || '[]'))
      .subscribe(response=>{
        localStorage.removeItem("panier")
        localStorage.removeItem("panierList") 
        this.servicelist =[]});
    }
  }
}
