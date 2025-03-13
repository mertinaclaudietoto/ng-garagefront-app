import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Dialog } from 'primeng/dialog';
import { FluidModule } from 'primeng/fluid';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Product } from '../../task/models/task.model';
import { products } from '../../task/data/task';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule, CalendarModule, FluidModule, Dialog, ScrollPanelModule, NgFor, ButtonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  date: Date[] | undefined;
  display: boolean = false;
  availableProducts: Product[] | undefined;

  ngOnInit() {
  }

  selectDate(event: Date) {
    console.log(event);
    this.availableProducts = products;
  }
}
