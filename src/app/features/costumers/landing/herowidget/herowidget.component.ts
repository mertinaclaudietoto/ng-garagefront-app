
import { ServicePrice } from '../../../../shared/models/servicePrice';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FluidModule } from 'primeng/fluid';
import { CarService } from '../../services/car.service';
import { Car } from '../../../../shared/models/car';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ServiceCarPriceComponent } from "../service-car-price/service-car-price.component";
import { ServicepriceService } from '../../services/serviceprice.service';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { serviceCar, ServicesCarService } from '../../../manager/services-car/serice/services-car.service';
@Component({
  selector: 'app-herowidget',
  imports: [ PaginatorModule,ToolbarModule,InputTextModule, SplitterModule, SelectModule, ButtonModule, FormsModule, RippleModule, FluidModule, CommonModule, ImageModule, ServiceCarPriceComponent],
  templateUrl: './herowidget.component.html',
  styleUrl: './herowidget.component.scss'
})
export class HerowidgetComponent implements OnInit {
  brandandmodel:string|null=null;
  servicepriceListe:serviceCar[]=[];
  skip:number=0;
  limit:number=6;
  rows:number=0;
  keysearch: { [key: string]: string } = {
    service:""
  };
  constructor(private serviceCarService:ServicesCarService) {
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
 

}
