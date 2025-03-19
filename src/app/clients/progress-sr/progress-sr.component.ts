import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { ServicePrice } from '../../class/servicePrice';
import { ServicepriceService } from '../../service/serviceprice.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { TopbarclientsComponent } from '../topbarclients/topbarclients.component';
@Component({
  selector: 'app-progress-sr',
  imports: [TopbarclientsComponent,ProgressBarModule,CommonModule, DataViewModule, FormsModule, SelectButtonModule, PickListModule, OrderListModule, TagModule, ButtonModule],
  templateUrl: './progress-sr.component.html',
  styles: `
  ::ng-deep {
      .p-orderlist-list-container {
          width: 100%;
      }
  }
`,
})
export class ProgressSrComponent {
  layout: 'list' | 'grid' = 'list';

  options = ['list', 'grid'];

  products: ServicePrice[] = [];
  sourceCities: any[] = [];
  targetCities: any[] = [];

  orderCities: any[] = [];

  constructor(private productService: ServicepriceService) {}

  ngOnInit() {
      this.productService.getServicePrice().subscribe((data) => (this.products = data.slice(0, 6)));

      this.sourceCities = [
          { name: 'San Francisco', code: 'SF' },
          { name: 'London', code: 'LDN' },
          { name: 'Paris', code: 'PRS' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Berlin', code: 'BRL' },
          { name: 'Barcelona', code: 'BRC' },
          { name: 'Rome', code: 'RM' }
      ];

      this.targetCities = [];

      this.orderCities = [
          { name: 'San Francisco', code: 'SF' },
          { name: 'London', code: 'LDN' },
          { name: 'Paris', code: 'PRS' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Berlin', code: 'BRL' },
          { name: 'Barcelona', code: 'BRC' },
          { name: 'Rome', code: 'RM' }
      ];
  }

  getSeverity(product: ServicePrice) {
      switch (product.service.name) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warn';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return 'info';
      }
  }
 
}
