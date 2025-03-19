import { Component,Input } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { Car } from '../../../class/car';
import { ServicePrice } from '../../../class/servicePrice';
import { FormatnumberpipePipe } from '../../../pipe/formatnumberpipe.pipe';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-service-car-price',
  imports: [ButtonModule,FormatnumberpipePipe,SplitterModule,ImageModule,InputTextModule ],
  templateUrl: './service-car-price.component.html',
  styleUrl: './service-car-price.component.scss'
})
export class ServiceCarPriceComponent {
  @Input() value!: ServicePrice;
 
}
