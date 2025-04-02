import { CarService } from './../../costumers/services/car.service';
import { Component, OnInit } from '@angular/core';
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
import { serviceCar, ServicesCarService } from './services/services-car.service';
import { IdName } from '../../../shared/models/car-type';
import { Subscription } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-services-car',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule,PaginatorModule],
  templateUrl: './services-car.component.html',
  styleUrl: './services-car.component.scss'
})
export class ServicesCarComponent {
  subscriptions : Subscription[] = [];
  servicelist:serviceCar[]|undefined=undefined;
  dropdownItemsService:IdName[]|undefined=undefined;
  display: boolean = false;
  addOrUpdateValue: serviceCar = {
    _id: null,
    picture: '',
    brandandmodel: '',
    servicelist: [
      {
        idservice:{_id:0,name:''},
        price: 0,
        time: 0
      }
    ]
  };
  deleteValue: serviceCar = {
    _id: null,
    picture: '',
    brandandmodel: '',
    servicelist: [
      {
        idservice:{_id:0,name:''},
        price: 0,
        time: 0
      }
    ]
  };
  img!: CloudinaryImage;
  cld!:Cloudinary;
  skip:number=0;
  limit:number=0;
  first: number = 0;
  rows: number = 10;
  constructor(private carService:CarService,private servicesCarService: ServicesCarService) {
  }
  ngOnInit() {
    this.subscriptions.push(this.carService.getCarType("service01").subscribe(table=>{
      this.dropdownItemsService = table?.map(value=>({name:value.name,_id:value._id}))
    } ));
    this.subscriptions.push(this.servicesCarService.getAll(this.first,this.rows).subscribe(table=> {
      this.servicelist=table;
    }));
    this.addOrUpdateValue.picture=IMAGESDEFAULTS["car"];
    
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dcufspbrh'
      }
    });
  }
  setUpdateValue(carType:serviceCar){
    this.addOrUpdateValue=carType;
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

  modifOrAdd(carType:serviceCar){
      console.log(carType);
      this.servicesCarService.modifOrAdd(carType).subscribe( response => {
        this.relaod();
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête POST OR PUT :", error);
      }
      );
  }
  close() {
    this.display = false;
    this.servicesCarService.delete(this.deleteValue).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
    });
  }
  open(carType:serviceCar) {
    this.deleteValue=carType;
    this.display = true;
  }
  relaod(){
    this.servicesCarService.getAll(this.skip,this.limit).subscribe(table=> this.servicelist=table);
  }
  
  addRow() {
    this.addOrUpdateValue.servicelist.push({ idservice: {_id:0,name:''}, price: 0,time:0 });
  }

  removeRow(index: string) {
    console.log(index);
    this.addOrUpdateValue.servicelist = this.addOrUpdateValue.servicelist.filter(value => value.idservice._id !== index || value.idservice._id !== '' );
  }
  // 0dfab175c8b1c1355b90c1ef0679acb2
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
        console.log(this.first)
        this.subscriptions.push(this.servicesCarService.getAll(this.first,this.rows).subscribe(table=> {
          this.servicelist=table;
          console.log(table);
        }));
    }
}
