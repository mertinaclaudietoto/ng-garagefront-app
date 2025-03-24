import { Component,Input } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarClient } from '../models/car-client';

@Component({
  selector: 'app-car-client-list',
  imports: [ButtonModule,SplitterModule,ImageModule,InputTextModule],
  templateUrl: './car-client-list.component.html',
  styles: `.fixed-image {
    width: 250px;
    height: 200px;
   /* Cela garantit que l'image couvre toute la zone sans déformation */
}`
})
export class CarClientListComponent {
  @Input() value!: CarClient;
}
