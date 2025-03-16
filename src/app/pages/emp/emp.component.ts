import { Component, OnInit } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableCheckbox, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { Emp } from '../../class/emp';
import { EmpService } from '../../service/emp.service';
import { IdName } from '../../class/car-type';
import { CarService } from '../../service/car.service';
@Component({
  selector: 'app-emp',
   imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule,TableModule,DialogModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.scss'
})
export class EmpComponent {
    empList:Emp[]|undefined=undefined;
    serviceList :IdName[]|undefined = undefined;
    ruleList :IdName[]|undefined =undefined;
    display: boolean = false;
    addOrUpdateValue:Emp|undefined =undefined;
    deleteValue :Emp|undefined =undefined;
    dropdownItems:any=[];
    constructor(private empService: EmpService,
      private carService:CarService
    ) {
    }

    ngOnInit() {
      this.empService.getEmp().subscribe(table=> this.empList=table);
      this.carService.getCarType("services").subscribe(table=>this.serviceList=table);
      this.carService.getCarType("rules").subscribe(table=>
        {this.ruleList=table;
          this.dropdownItems = table?.map(value=>({name:value.name,code:value._id}));
          console.log(this.dropdownItems);
        })
      
    }

    
    
    dropdownItem = null;
    
    setUpdateValue(carType:Emp){
      this.addOrUpdateValue=carType;
    }
    modifOrAdd(carType:Emp){
      this.empService.modifOrAddCar(carType).subscribe( response => {
        this.relaod();
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
      }
    );
    }
    close() {
      this.display = false;
      this.empService.deleteCar(this.deleteValue).subscribe( response => {
        this.relaod();
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête DELETE :", error);
      }
    );
    }
    open(value:Emp) {
      this.deleteValue=value;
      this.display = true;
    }
    relaod(){
      this.empService.getEmp().subscribe(table=> this.empList=table);
      this.deleteValue  =undefined;
      this.addOrUpdateValue=undefined;
    }
    // 
    hasSerivce(service :IdName) :boolean|undefined{
      return this.serviceList?.some(s => s._id === service._id);
    }
    selectType($event:Event,type:IdName){
      const isChecked=($event.target as HTMLInputElement).checked;
      if(isChecked){
        // this.pokemon.types.push(type)
      }else{
        // this.pokemon.types.filter(type1=> type1!=type)
      }
    }
    checkboxValue: any[] = [];
 

}

