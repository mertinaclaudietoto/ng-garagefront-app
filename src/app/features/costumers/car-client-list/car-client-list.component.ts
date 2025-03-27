import { Component,Input, Output, EventEmitter } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarClient } from '../../../shared/models/car-client';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-car-client-list',
  imports: [ButtonModule,SplitterModule,ImageModule,InputTextModule,DialogModule],
  templateUrl: './car-client-list.component.html',
  styles: `
    .custom-image img {
      width: 250px;
      height: 250px;
      object-fit: cover; /* ou 'contain' selon ton besoin */
    }
  `
})
export class CarClientListComponent {
  @Input() value!: CarClient;
   display:boolean= false;

  @Output() updateF = new EventEmitter<CarClient>();
  @Output() deleteF = new EventEmitter<CarClient>();
  @Output() close = new EventEmitter<CarClient>();
  
  imageWidth: number = 150;
  imageHeight: number = 150;
  onImageLoad(event: any) {
    const img = event.target;
    if (img.naturalWidth <= 150 && img.naturalHeight <= 150) {
      // L'image a des dimensions qui ne dépassent pas 150x150
      this.imageWidth = img.naturalWidth;
      this.imageHeight = img.naturalHeight;
    } else {
      // L'image dépasse 150x150, on applique 150px par 150px
      this.imageWidth = 150;
      this.imageHeight = 150;
    }
  }
  updateV(value:CarClient) {
    console.log("dkeokdoekdoedke");
    this.updateF.emit(value); 
  }
  deleteV(value:CarClient) {
    this.display=true;
    this.deleteF.emit(value); 
  }
  closeV(value:CarClient){
    this.close.emit(value);
  }
}
