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
@Component({
  selector: 'app-car-form',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent implements OnInit{
    carList:Car[]|undefined=undefined;
   
    display: boolean = false;
    addOrUpdateValue:Car|undefined =undefined;
    deleteValue :Car|undefined =undefined;
    constructor(private carService: CarService) {
    }

    ngOnInit() {
      this.carService.getCar().subscribe(table=> this.carList=table);
    }

    crudSelect=["cartypes","engines","sizes","weigths"];

    dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
    ];

    dropdownItem = null;
   
  setUpdateValue(carType:Car){
    this.addOrUpdateValue=carType;
  }
  modifOrAdd(carType:Car){
    this.carService.modifOrAddCar(carType).subscribe( response => {
      this.relaod();
    },
    error => {
      console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
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
    }
  );
  }
  open(carType:Car) {
    this.deleteValue=carType;
    this.display = true;
  }
  relaod(){
    this.carService.getCar().subscribe(table=> this.carList=table);
    this.deleteValue  =undefined;
    this.addOrUpdateValue=undefined;
  }
}
