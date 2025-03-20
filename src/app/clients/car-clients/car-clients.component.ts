import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FluidModule } from 'primeng/fluid';
import { CarService } from '../../service/car.service';
import { Car } from '../../class/car';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ServiceCarPriceComponent } from '../landing/service-car-price/service-car-price.component';
import { ServicePrice } from '../../class/servicePrice';
import { ServicepriceService } from '../../service/serviceprice.service';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TopbarclientsComponent } from '../topbarclients/topbarclients.component';
import { SetServiceComponent } from "../set-service/set-service.component";
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-car-clients',
    imports: [DialogModule,TopbarclientsComponent, PaginatorModule, ToolbarModule, InputTextModule, SplitterModule, SelectModule, ButtonModule, FormsModule, RippleModule, FluidModule, CommonModule, ImageModule, ServiceCarPriceComponent, SetServiceComponent],
  templateUrl: './car-clients.component.html',
  styleUrl: './car-clients.component.scss'
})
export class CarClientsComponent {
  dropdownItemsCarTypes :any=[];
  dropdownItemsEngine :any=[];
  dropdownItemsSize :any=[];
  dropdownItemsWeigth :any=[];
  dropdownItemsServices :any=[];
  addOrUpdateValue:Car =new Car();
  servicepriceListe:ServicePrice[]=[];
  skip:number=0;
  limit:number=9;
  rows:number=0;
  keysearch: { [key: string]: string } = {
    service:""
  };
  display: boolean = true;

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
  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","projet_mean_images");
        data.append("cloud_name","dcufspbrh");
        const res =await fetch("https://api.cloudinary.com/v1_1/dcufspbrh/image/upload",{
          method:'POST',
          body:data
        })
        const urlImage = await res.json();
        this.addOrUpdateValue.picture=urlImage.url;
        console.log(urlImage.url);
    }
  }
}
