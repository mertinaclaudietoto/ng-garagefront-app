import { Component ,OnInit, Input} from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CarService } from '../../../service/car.service';
import { IdName } from '../../../class/car-type';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { response } from 'express';


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
  addOrUpdateValue : IdName =new IdName(undefined,'');
  deleteValue : IdName =new IdName(undefined,'');

 
  ngOnInit() {
    this.carService.getCarType(this.namecrud).subscribe(table=> this.carTypes=table);
  }
  setUpdateValue(carType:IdName){
    this.addOrUpdateValue=carType;
  }
  modifOrAdd(carType:IdName){
    this.carService.modifOrAddCarType(this.namecrud,carType).subscribe( response => {
      this.relaod();
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête PUT :", error);
      }
    );
  }
  close() {
    this.display = false;
    this.carService.deleteCarType(this.namecrud,this.deleteValue).subscribe( response => {
        this.relaod();
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
      }
    );
  }
  open(carType:IdName) {
    this.deleteValue=carType;
    this.display = true;
  }
  relaod(){
    this.carService.getCarType(this.namecrud).subscribe(table=> this.carTypes=table);
    this.deleteValue  =new IdName(undefined,'');
    this.addOrUpdateValue=new IdName(undefined,'');
  }

}
