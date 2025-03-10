import { Component ,OnInit, Input} from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CarService } from '../car.service';
import { IdName } from './car-type';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-car-type',
  imports: [DialogModule,FluidModule,ButtonModule,FormsModule,TableModule,InputTextModule],
  templateUrl: './car-type.component.html',
  styleUrl: './car-type.component.scss'
})
export class CarTypeComponent implements OnInit {
  @Input() namecrud: string = '';
  carTypes: IdName[]=[];
  constructor(private carService: CarService) {
  }
  display: boolean = false;
  addOrUpdateValue : IdName =new IdName(0,'');
  deleteValue : IdName =new IdName(0,'');

 
  ngOnInit() {
    this.carTypes=this.carService.getCarType(this.namecrud);
  }
  setUpdateValue(carType:IdName){
    this.addOrUpdateValue=carType;
  }
  modifOrAdd(carType:IdName){
    this.carService.modifOrAddCarType(this.namecrud,carType);
  }
  close() {
    this.display = false;
    this.carService.deleteCarType(this.namecrud,this.deleteValue);
  }
  open(carType:IdName) {
    console.log(carType);
    this.deleteValue=carType;
    this.display = true;
  }

}
