import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { products } from '../../data/task';
import { Product } from '../../models/task.model';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-list-task',
  imports: [DragDropModule, TableModule, CommonModule, ButtonModule, Dialog, ScrollPanelModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit {
  availableProducts: Product[] | undefined;

  selectedProducts!: Product[];

  draggedProduct: Product | undefined | null;
  display: boolean = false;

  constructor() { }

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = products;
  }

  dragStart(product: Product) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
      this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
      if (product.id === (this.availableProducts as Product[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  closeModal() {
    this.display = false;
  }
}
