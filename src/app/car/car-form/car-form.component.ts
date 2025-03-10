import { Component } from '@angular/core';
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

import { IdName } from '../car-type/car-type';
import { CarTypeComponent } from "../car-type/car-type.component";
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Car } from '../car';
import { CARLIST } from '../data-car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-form',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent {
    carList:Car[]=CARLIST;
    addOrListValue:boolean=false;
    addOrList(value:boolean){
      this.addOrListValue=value;
    }
    display: boolean = false;
    addOrUpdateValue:Car = new Car(1,  'image.jpg', 'Toyota', 'Corolla', 'Berline', 2023, '2023-04-05', 'Essence', 'Moyenne', '1300kg', 2700);
    deleteValue :Car = new Car(1,  'image.jpg', 'Toyota', 'Corolla', 'Berline', 2023, '2023-04-05', 'Essence', 'Moyenne', '1300kg', 2700);
    constructor(private carService: CarService) {
    }

    crudSelect=["cartypes","enginetypes","sizetypes","weighttypes"];
    dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
    ];

    dropdownItem = null;
    items: MenuItem[] = [
      {
          label: 'Save',
          icon: 'pi pi-check'
      },
      {
          label: 'Update',
          icon: 'pi pi-upload'
      },
      {
          label: 'Delete',
          icon: 'pi pi-trash'
      },
      {
          label: 'Home Page',
          icon: 'pi pi-home'
      }
  ];
  setUpdateValue(carType:Car){
    this.addOrUpdateValue=carType;
  }
  modifOrAdd(carType:Car){
    this.carService.modifOrAddCar(carType);
  }
  close() {
    this.display = false;
    this.carService.deleteCar(this.deleteValue);
  }
  open(carType:Car) {
    console.log(carType);
    this.deleteValue=carType;
    this.display = true;
  }
}
