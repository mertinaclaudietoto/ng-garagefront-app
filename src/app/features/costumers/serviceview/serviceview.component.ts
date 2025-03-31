import { serviceprice, ServicesCarService } from './../../manager/services-car/serice/services-car.service';

import { ServicePrice } from '../../../shared/models/servicePrice'; 
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FluidModule } from 'primeng/fluid';
import { CarService } from '../services/car.service';
import { Car } from '../../../shared/models/car'; 
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ServiceCarPriceComponent } from '../landing/service-car-price/service-car-price.component'; 
import { ServicepriceService } from '../services/serviceprice.service'; 
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { serviceCar } from '../../manager/services-car/serice/services-car.service';
import { FormatnumberpipePipe } from '../../../shared/pipe/formatnumber/formatnumberpipe.pipe';
import { json } from 'body-parser';
import { ServiceviewService } from '../serviceview.service';
type ButtonType = "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null;
export interface serviceList {
  idmechanic: string,
  service: serviceprice,
  startdate: Date|string,
  enddate: Date|string,
  nbrstars: number
  idcar:string|null,
  brandandmodel:string,
  picture:string,
}
export interface detserviceClient {
  _id:string|null,
  idcostumer:string|null,
  etats:number,
  serviceList:Partial<{
    idmechanic: {
      _id:string|null,
      name:string
    },
    service: serviceprice,
    startdate: Date|string,
    enddate: Date|string,
    nbrstars: number
    idcar:string|null,
    brandandmodel:string,
    picture:string,
  }> [
    
  ]
}
@Component({
  selector: 'app-serviceview',
  imports: [ PaginatorModule,ToolbarModule,InputTextModule, SplitterModule, SelectModule, ButtonModule, FormsModule, RippleModule, FluidModule, CommonModule, ImageModule, ServiceCarPriceComponent,FormatnumberpipePipe],
  templateUrl: './serviceview.component.html',
  styleUrl: './serviceview.component.scss'
})
export class ServiceviewComponent {
  
  brandandmodel:string|null=null;
  servicepriceListe:serviceCar[]=[];
  skip:number=0;
  limit:number=6;
  rows:number=0;
  keysearch: { [key: string]: string } = {
    service:""
  };
  panier:detserviceClient={
    _id:null,
    idcostumer:localStorage.getItem('iduser'),
    etats:0,
    serviceList: []
  };
  constructor(private serviceCarService:ServicesCarService,private paginationState:ServiceviewService) {
  }
  ngOnInit() {
      this.serviceCarService.getRows().subscribe(value=>{
      this.rows=value;});
      this.loadData();
  }  
  loadData() {
    this.serviceCarService.getAll(this.skip,this.limit).subscribe(table=> this.servicepriceListe=table);
  }
  onPageChange(event: PaginatorState) {
      this.skip = event.first ?? 0;
      this.limit = event.rows ?? 10;
      this.loadData();
  }
  onsearche(){
    this.serviceCarService.getBrandModel(this.brandandmodel).subscribe(table=> this.servicepriceListe=table);
  }
  uniqueServices = new Set<string>();
  addcar(value:serviceprice,idcar:string|null,picture:string,brandandmodel:string){
    const setvalue= {
      idmechanic:{_id: null,name:''},
      service: value,
      startdate: '',
      enddate: '',
      nbrstars: 0,
      idcar:idcar,
      brandandmodel:brandandmodel,
      picture:picture
    };
    const serviceJson = JSON.stringify(setvalue);
    if (!this.uniqueServices.has(serviceJson)) {
      this.uniqueServices.add(serviceJson);
      this.panier.serviceList.push(setvalue);
    }
    this.paginationState.addItemToPanier(this.panier);
  }
}

