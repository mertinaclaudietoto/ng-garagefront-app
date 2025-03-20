import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-featureswidget',
  imports: [RouterModule,CommonModule,RippleModule,ButtonModule],
  templateUrl: './featureswidget.component.html',
  styleUrl: './featureswidget.component.scss'
})
export class FeatureswidgetComponent {
  constructor(public router: Router) {}
}
