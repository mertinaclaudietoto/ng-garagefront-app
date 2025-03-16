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

import { CarTypeComponent } from '../../layout/car/car-type/car-type.component';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Car } from '../../class/car';


import { CarService } from '../../service/car.service';
// Assurez-vous que `CarType` est exporté dans ce fichier
import { IdName } from '../../class/car-type';
import { convertFileToBase64 } from '../../expo/base64';
import { UndoIcon } from 'primeng/icons';
@Component({
  selector: 'app-car-form',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent implements OnInit{
    carList:Car[]|undefined=undefined;
    // carTypeList:IdName[] |undefined=undefined;
    // sizeList:IdName[] |undefined=undefined;
    // engineList:IdName[]|undefined=undefined;
    // engineList:IdName[]|undefined=undefined;
    dropdownItemsCarTypes :any=[];
    dropdownItemsEngine :any=[];
    dropdownItemsSize :any=[];
    dropdownItemsWeigth :any=[];





    display: boolean = false;
    addOrUpdateValue:Car =new Car();
    deleteValue :Car =new Car();
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
    }

    crudSelect=["cartypes","engines","sizes","weigths"];

    dropdownItem = null;
   
  setUpdateValue(carType:Car){
    this.addOrUpdateValue=carType;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      // Appeler la méthode convertFileToBase64 et récupérer la chaîne Base64
      convertFileToBase64(file)
        .then(value => {
          this.addOrUpdateValue.picture=value;
        })
        .catch(error => {
          console.error('Erreur de conversion en Base64:', error); // Gérer les erreurs
        });
    }
  }

  modifOrAdd(carType:Car){
    console.log(carType);
    // this.carService.modifOrAddCar(carType).subscribe( response => {
    //   this.relaod();
    // },
    // error => {
    //   console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
    // }
    // );
  }
  close() {
    this.display = false;
    this.carService.deleteCar(this.deleteValue).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
    }
  );
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
