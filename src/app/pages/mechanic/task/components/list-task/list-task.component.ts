import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { tasks } from '../../data/task';
import { Task } from '../../models/task.model';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ModalDetailTaskComponent } from '../../../../../components/modal-detail-task/modal-detail-task.component';

@Component({
  selector: 'app-list-task',
  imports: [DragDropModule,
    TableModule,
    CommonModule,
    ButtonModule,
    ScrollPanelModule,
    ModalDetailTaskComponent
  ],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit {
  availableProducts: Task[] | undefined;
  selectedProducts!: Task[];
  draggedProduct: Task | undefined | null;
  modalVisible = false;
  selectedTask!: Task;

  constructor() { }

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = tasks;
  }

  dragStart(product: Task) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...(this.selectedProducts as Task[]), this.draggedProduct];
      this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: Task) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as Task[]).length; i++) {
      if (product.id === (this.availableProducts as Task[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  showModal(task: Task) {
    this.selectedTask = task;
    this.modalVisible = true;
  }
}
