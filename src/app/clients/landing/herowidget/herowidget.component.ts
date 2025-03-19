import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FluidModule } from 'primeng/fluid';
import { CarService } from '../../../service/car.service';
import { Car } from '../../../class/car';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ServiceCarPriceComponent } from "../service-car-price/service-car-price.component";
import { ServicePrice } from '../../../class/servicePirce';
import { ServicepriceService } from '../../../service/serviceprice.service';


@Component({
  selector: 'app-herowidget',
  imports: [InputTextModule, SplitterModule, SelectModule, ButtonModule, FormsModule, RippleModule, FluidModule, CommonModule, ImageModule, ServiceCarPriceComponent],
  templateUrl: './herowidget.component.html',
  styleUrl: './herowidget.component.scss'
})
export class HerowidgetComponent implements OnInit {
  dropdownItemsCarTypes :any=[];
  dropdownItemsEngine :any=[];
  dropdownItemsSize :any=[];
  dropdownItemsWeigth :any=[];
  addOrUpdateValue:Car =new Car();
  servicepriceListe:ServicePrice[]=[];
    
    constructor(private carService: CarService,private servicepriceService: ServicepriceService) {
    }
    ngOnInit() {
      this.servicepriceService.getServicePrice().subscribe(table=> this.servicepriceListe=table);
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
    }  

}
