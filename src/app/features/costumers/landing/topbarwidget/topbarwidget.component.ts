import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-topbarwidget',
  imports: [StyleClassModule,RouterModule,RippleModule,ButtonModule],
  templateUrl: './topbarwidget.component.html',
  styleUrl: './topbarwidget.component.scss'
})
export class TopbarwidgetComponent {
  constructor(public router: Router) {}
}
