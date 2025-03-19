import { Component,Input } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { Car } from '../../../class/car';
import { ServicePrice } from '../../../class/servicePirce';

@Component({
  selector: 'app-service-car-price',
  imports: [SplitterModule,ImageModule,InputTextModule ],
  templateUrl: './service-car-price.component.html',
  styleUrl: './service-car-price.component.scss'
})
export class ServiceCarPriceComponent {
  @Input() value!: ServicePrice;
 
  
}
