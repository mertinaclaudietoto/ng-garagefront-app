import { Component,Input } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ServicePrice } from '../../shared/models/servicePrice';
import { ButtonModule } from 'primeng/button';
import { FormatnumberpipePipe } from '../../shared/pipe/formatnumber/formatnumberpipe.pipe';
import { serviceCar } from '../../features/manager/services-car/services/services-car.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-car-price',
  imports: [ButtonModule,FormatnumberpipePipe,SplitterModule,ImageModule,InputTextModule ,CommonModule],
  templateUrl: './service-car-price.component.html',
  styleUrl: './service-car-price.component.scss'
})
export class ServiceCarPriceComponent {
  @Input() value!: serviceCar;
  
}

