import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ServicePrice } from '../models/servicePrice';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-det-service',
  imports: [CheckboxModule,SplitterModule,RadioButtonModule,FloatLabelModule,FluidModule,ProgressBarModule,ButtonModule,CommonModule,FormsModule],
  templateUrl: './det-service.component.html',
  styleUrl: './det-service.component.scss'
})
export class DetServiceComponent {
  item: ServicePrice = new ServicePrice();
  radioValue: any[] = [];
}
