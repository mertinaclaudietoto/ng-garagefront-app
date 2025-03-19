import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-topbarclients',
  imports: [StyleClassModule,RouterModule,RippleModule,ButtonModule],
  templateUrl: './topbarclients.component.html',
  styleUrl: './topbarclients.component.scss'
})
export class TopbarclientsComponent {
  constructor(public router: Router) {}
}
