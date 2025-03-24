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

import { Emp } from '../../costumers/models/emp';
import { EmpService } from '../../costumers/services/emp.service';
import { IdName } from '../../costumers/models/car-type';
import { CarService } from '../../costumers/services/car.service';

import { IMAGESDEFAULTS } from '../../costumers/dataimage';
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

    addOrUpdateValue:Emp =new Emp();
    deleteValue :Emp =new Emp();
    dropdownItems:any=[];
    constructor(private empService: EmpService,private carService:CarService) {
      this.addOrUpdateValue.picture=IMAGESDEFAULTS["photo"];
    }

    ngOnInit() {
      this.empService.getEmp().subscribe(table=> this.empList=table);
      this.carService.getCarType("services").subscribe(table=>this.serviceList=table);
      this.carService.getCarType("rules").subscribe(table=>
        {this.ruleList=table;
          this.dropdownItems = table?.map(value=>({name:value.name,_id:value._id}));
          console.log(this.dropdownItems);
        })
    }
    dropdownItem = null;
    
    setUpdateValue(carType:Emp){
      this.addOrUpdateValue=carType;
    }
    modifOrAdd(carType:Emp){
      this.empService.modifOrAddCar(carType).subscribe( response => {
        console.log(response);
        this.relaod();
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête POST OR UPDATE Emp :", error);
      });
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
      this.deleteValue  =new Emp();
      this.addOrUpdateValue=new Emp();
    }
    // 
    hasService(service :IdName) :boolean|undefined{
      return this.addOrUpdateValue.skills?.some(s => s._id === service._id);
    }
    selectType($event:Event,type:IdName){
      const isChecked=($event.target as HTMLInputElement).checked;
      if(isChecked){
        this.addOrUpdateValue.skills.push(type);
      }else{
        this.addOrUpdateValue.skills=this.addOrUpdateValue.skills.filter(type1=> type1._id!=type._id)
      }
    }
    checkboxValue: any[] = [];

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

