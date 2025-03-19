import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-featureswidget',
  imports: [CommonModule,RippleModule,ButtonModule],
  templateUrl: './featureswidget.component.html',
  styleUrl: './featureswidget.component.scss'
})
export class FeatureswidgetComponent {
}
