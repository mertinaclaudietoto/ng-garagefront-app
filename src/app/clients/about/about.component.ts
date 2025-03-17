import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-about',
  imports: [Timeline, CardModule, ButtonModule, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', image: 'game-controller.jpg' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', image: 'game-controller.jpg' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', image: 'game-controller.jpg' }
    ];
  }
}
