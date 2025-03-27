
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
@Component({
  selector: 'app-herowidget',
  imports: [ PaginatorModule,ToolbarModule,InputTextModule, SplitterModule, SelectModule, ButtonModule, FormsModule, RippleModule, FluidModule, CommonModule, ImageModule, ServiceCarPriceComponent],
  templateUrl: './herowidget.component.html',
  styleUrl: './herowidget.component.scss'
})
export class HerowidgetComponent implements OnInit {
  dropdownItemsCarTypes :any=[];
  dropdownItemsEngine :any=[];
  dropdownItemsSize :any=[];
  dropdownItemsWeigth :any=[];
  dropdownItemsServices :any=[];
  addOrUpdateValue:Car =new Car();
  servicepriceListe:ServicePrice[]=[];
  skip:number=0;
  limit:number=6;
  rows:number=0;
  keysearch: { [key: string]: string } = {
    service:""
  };

  constructor(private carService: CarService,private servicepriceService: ServicepriceService) {
  }
  ngOnInit() {
      this.servicepriceService.getRows().subscribe(value=>{
        this.rows=value;});
      this.loadData();
      this.carService.getCarType("cartypes").subscribe(table=>{
        this.dropdownItemsCarTypes = table?.map(value=>({name:value.name,_id:value._id}))
      } );
      this.carService.getCarType("sizes").subscribe(table=> {
        this.dropdownItemsSize = table?.map(value=>({name:value.name,_id:value._id}))
      });
      this.carService.getCarType("engines").subscribe(table=> {
        this.dropdownItemsEngine = table?.map(value=>({name:value.name,_id:value._id}))
      });
      this.carService.getCarType("weigths").subscribe(table=> {
        this.dropdownItemsWeigth = table?.map(value=>({name:value.name,_id:value._id}))
      });
      this.carService.getCarType("services").subscribe(table=> {
        this.dropdownItemsServices = table?.map(value=>({name:value.name,_id:value._id}))
      })
  }  
  loadData() {
    this.servicepriceService.getServicePricePagination(this.skip,this.limit).subscribe(table=> this.servicepriceListe=table);
  }
  onPageChange(event: PaginatorState) {
      this.skip = event.first ?? 0;
      this.limit = event.rows ?? 10;
      this.loadData();
  }
  

}
