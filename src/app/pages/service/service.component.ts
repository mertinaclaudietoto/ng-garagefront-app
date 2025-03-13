import { Component, OnInit } from '@angular/core';

// css 
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
//other component
import { CarTypeComponent } from '../../layout/car/car-type/car-type.component';

// service component

import { ServicePrice } from '../../class/servicePirce';
import { ServicepriceService } from '../../service/serviceprice.service';
@Component({
  selector: 'app-service',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, CarTypeComponent,TableModule,DialogModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  servicePriceList:ServicePrice[]|undefined=undefined;
  service:string ="services";
  constructor(private servicePriceService: ServicepriceService) {
  }
  ngOnInit() {
    this.servicePriceService.getServicePrice().subscribe(table=> this.servicePriceList=table);
  }
  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];
  
}

