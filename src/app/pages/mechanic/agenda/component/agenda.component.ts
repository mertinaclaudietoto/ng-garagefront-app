import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FluidModule } from 'primeng/fluid';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Task } from '../../task/models/task.model';
import { tasks } from '../../task/data/task';
import { ButtonModule } from 'primeng/button';
import { ModalDetailTaskComponent } from '../../../../components/modal-detail-task/modal-detail-task.component';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,
    CalendarModule,
    FluidModule,
    ScrollPanelModule,
    NgFor,
    ButtonModule,
    ModalDetailTaskComponent
  ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  date: Date[] | undefined;
  availableProducts: Task[] | undefined;
  modalVisible = false;
  selectedTask!: Task;

  ngOnInit() {
  }

  selectDate(event: Date) {
    console.log(event);
    this.availableProducts = tasks;
  }

  showModal(task: Task) {
    this.selectedTask = task;
    this.modalVisible = true;
  }
}
