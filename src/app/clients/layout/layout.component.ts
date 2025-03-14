import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { RouterModule } from '@angular/router';
import { Task } from '../../pages/mechanic/task/models/task.model';
import { tasks } from '../../pages/mechanic/task/data/task';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule, MenubarComponent, Carousel, ButtonModule, Tag],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  products!: Task[];

  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {
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
