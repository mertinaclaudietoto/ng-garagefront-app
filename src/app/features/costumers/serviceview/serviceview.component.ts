import { serviceprice, ServicesCarService } from '../../manager/services-car/services/services-car.service';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { serviceCar } from '../../manager/services-car/services/services-car.service';
import { FormatnumberpipePipe } from '../../../shared/pipe/formatnumber/formatnumberpipe.pipe';
import { ServiceviewService } from '../serviceview.service';
import { ServiceCostumer } from '../../../shared/models/servicesclient';
import { Emp } from '../../../shared/models/emp';
import { IdName } from '../../../shared/models/car-type';

export interface serviceList {
  idmechanic: Emp;
  service:{
    idservice:IdName,
    price:number,
    time:number,
    commission:number,
  }
  startdate: Date|null,
  enddate: Date|null,
  nbrstars: number,
  idcar: string|null,
  brandandmodel: string,
  picture: string
}

@Component({
  selector: 'app-serviceview',
  imports: [PaginatorModule, ToolbarModule, InputTextModule, SplitterModule, SelectModule, ButtonModule, FormsModule, RippleModule, FluidModule, CommonModule, ImageModule, FormatnumberpipePipe],
  templateUrl: './serviceview.component.html',
  styleUrl: './serviceview.component.scss'
})
export class ServiceviewComponent {

  brandandmodel: string | null = null;
  servicepriceListe: serviceCar[] = [];
  skip: number = 0;
  limit: number = 6;
  rows: number = 0;
  keysearch: { [key: string]: string } = {
    service: ""
  };
  panier: ServiceCostumer = {
    _id: null,
    idcostumer: new Emp(),
    etats: 1,
    dateappoitement:new Date(),
    serviceList: []
  };
  uniqueServices = new Set<string>();

  constructor(
    private serviceCarService: ServicesCarService, private paginationState: ServiceviewService
  ) { }

  ngOnInit() {
    this.serviceCarService.getRows().subscribe(value => {
      this.rows = value;
    });
    this.loadData();
  }

  loadData() {
    this.serviceCarService.getAll(this.skip, this.limit).subscribe(table => this.servicepriceListe = table);
  }

  onPageChange(event: PaginatorState) {
    this.skip = event.first ?? 0;
    this.limit = event.rows ?? 10;
    this.loadData();
  }

  onsearche() {
    this.serviceCarService.getBrandModel(this.brandandmodel).subscribe(table => this.servicepriceListe = table);
  }

  addcar(value: serviceprice, idcar: string | null, picture: string, brandandmodel: string) {
    
    const setvalue = {
      idmechanic:undefined,
      service: value,
      startdate: null,
      enddate: null,
      nbrstars: 0,
      idcar: idcar,
      brandandmodel: brandandmodel,
      picture: picture
    };
    const serviceJson = JSON.stringify(setvalue);
    if (!this.uniqueServices.has(serviceJson)) {
      this.uniqueServices.add(serviceJson);
      this.panier.serviceList.push(setvalue);
    }
    this.paginationState.addItemToPanier(this.panier);
  }
}

