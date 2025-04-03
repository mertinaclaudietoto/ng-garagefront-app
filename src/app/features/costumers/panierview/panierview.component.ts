import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Subscription } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { detserviceClient } from '../serviceview/serviceview.component';
import { ServiceviewService } from '../serviceview.service';
import { PanierviewService } from './panierview.service';

@Component({
  selector: 'app-panierview',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, TableModule, DialogModule, PaginatorModule],

  templateUrl: './panierview.component.html',
  styleUrl: './panierview.component.scss'
})
export class PanierviewComponent {
  subscriptions: Subscription[] = [];
  servicelist: detserviceClient[] | undefined = undefined;
  display: boolean = false;
  rowIndex: string = '';
  first: number = 0;
  rows: number = 10;

  constructor(
    private service: ServiceviewService,
    private panier: PanierviewService
  ) { }

  ngOnInit() {
    this.servicelist = JSON.parse(localStorage.getItem('panierlist') || '[]');
  }

  close() {
    this.service.removeItemFromPanier(this.rowIndex)
    this.display = false;
    this.servicelist = JSON.parse(localStorage.getItem('panierlist') || '[]');

  }

  open(product: string) {
    this.display = true;
    this.rowIndex = product;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

  savePanier() {
    if (typeof localStorage !== 'undefined') {
      this.panier.savePanier(JSON.parse(localStorage.getItem('panier') || '[]'))
        .subscribe(response => {
          localStorage.removeItem("panier")
          localStorage.removeItem("panierList")
          this.servicelist = []
        });

    }
  }
}
