import { Component, OnInit } from '@angular/core';
// css 
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
//other component
import { CarTypeComponent } from '../../layout/car/car-type/car-type.component';
//classe
import { Car } from '../../class/car';
// service component

import { ServicePrice } from '../../class/servicePirce';
import { ServicepriceService } from '../../service/serviceprice.service';
import { CarService } from '../../service/car.service';
import { IdName } from '../../class/car-type';
import { FormatnumberpipePipe } from '../../pipe/formatnumberpipe.pipe';
@Component({
  selector: 'app-service',
  imports: [FormatnumberpipePipe,InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  servicePriceList:ServicePrice[]|undefined=undefined;
  carList:Car[]|undefined=undefined;
  serviceList:IdName[]|undefined=undefined;
  service:string ="services";
  display: boolean = false;
  addOrUpdateValue:ServicePrice =new ServicePrice();
  deleteValue :ServicePrice =new ServicePrice();
  dropdownItemsCar:any=[];
  dropdownItemsService:any =[];
  constructor(private servicePriceService: ServicepriceService,
    private carService :CarService
  ) {
  }
  ngOnInit() {
    this.servicePriceService.getServicePrice().subscribe(table=> this.servicePriceList=table);
    this.carService.getCar().subscribe(value=> {this.dropdownItemsCar = value.map(v=>({...v,name:v.brand+" "+v.model+" "+v.version}))} );
    this.carService.getCarType("services").subscribe(value=> {this.dropdownItemsService = value.map(v=>({...v}))});
  }

  dropdownItem = null;
  setUpdateValue(value:ServicePrice){
      this.addOrUpdateValue=value;
  }
  modifOrAdd(value:ServicePrice){
    // console.log(value)
    this.servicePriceService.modifOrAddCar(value).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête POST OR UPDATE :", error);
    });
  }
  close() {
    this.display = false;
    this.servicePriceService.deleteCar(this.deleteValue).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
    }
  );
  }
  open(carType:ServicePrice) {
      this.deleteValue=carType;
      this.display = true;
  }
  relaod(){
    this.servicePriceService.getServicePrice().subscribe(table=> this.servicePriceList=table);
    this.deleteValue  =new ServicePrice();
    this.addOrUpdateValue=new ServicePrice();
  }
  
}

