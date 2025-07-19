import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-topbarclients',
  imports: [TagModule,ChipModule,StyleClassModule,RouterModule,RippleModule,ButtonModule],
  templateUrl: './topbarclients.component.html',
  styleUrl: './topbarclients.component.scss'
})
export class TopbarclientsComponent {
  constructor(public router: Router) {}
}
