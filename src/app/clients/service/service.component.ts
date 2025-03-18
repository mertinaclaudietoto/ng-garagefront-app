import { Component, OnInit } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { tasks } from '../../pages/mechanic/task/data/task';
import { Task } from '../../pages/mechanic/task/models/task.model';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [AnimateOnScroll, AvatarModule, Carousel, ButtonModule, Tag, CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  products!: Task[];

  ngOnInit(): void {
    this.products = tasks;
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}
