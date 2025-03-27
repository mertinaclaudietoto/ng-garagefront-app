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


import { CarService } from '../services/car.service';
// Assurez-vous que `CarType` est exporté dans ce fichier
import { IdName } from '../../../shared/models/car-type';
import { IMAGESDEFAULTS } from '../dataimage';


// cloudinary

import {fill} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';

@Component({
  selector: 'app-car-form',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent implements OnInit{
    carList:Car[]|undefined=undefined;
    dropdownItemsCarTypes :any=[];
    dropdownItemsEngine :any=[];
    dropdownItemsSize :any=[];
    dropdownItemsWeigth :any=[];
    display: boolean = false;
    addOrUpdateValue:Car =new Car();
    deleteValue :Car =new Car();
    img!: CloudinaryImage;
    cld!:Cloudinary;
    constructor(private carService: CarService) {
      
    }
    ngOnInit() {
      this.carService.getCar().subscribe(table=> this.carList=table);
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
      this.addOrUpdateValue.picture=IMAGESDEFAULTS["car"];
      this.cld = new Cloudinary({
        cloud: {
          cloudName: 'dcufspbrh'
        }
      });
    }

    crudSelect=["cartypes","engines","sizes","weigths"];

    dropdownItem = null;
   
  setUpdateValue(carType:Car){
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

  modifOrAdd(carType:Car){
    console.log(carType);
    this.carService.modifOrAddCar(carType).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête POST OR PUT :", error);
    }
    );
  }
  close() {
    this.display = false;
    this.carService.deleteCar(this.deleteValue).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
    });
  }
  open(carType:Car) {
    this.deleteValue=carType;
    this.display = true;
  }
  relaod(){
    this.carService.getCar().subscribe(table=> this.carList=table);
    this.deleteValue   =new Car();
    this.addOrUpdateValue  =new Car();
  }
}