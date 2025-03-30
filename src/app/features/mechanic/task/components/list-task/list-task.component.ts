import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ModalDetailTaskComponent } from '../../../../../shared/components/modal-detail-task/modal-detail-task.component';
import { Tag } from 'primeng/tag';
import { Task } from '../../../../../shared/models/task.model';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { MessageComponent } from '../../../../../shared/components/message/message.component';
import { ListTaskService } from '../../services/list-task.service';
import { FomratDatePipe } from '../../../../../shared/pipe/formatDate/fomrat-date.pipe';

@Component({
  selector: 'app-list-task',
  imports: [DragDropModule,
    TableModule,
    CommonModule,
    ButtonModule,
    ScrollPanelModule,
    ModalDetailTaskComponent,
    Tag,
    FomratDatePipe,
    MessageComponent
  ],
  providers: [ConfirmationService],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit, OnDestroy {
  availableTasks: Task[] = [];
  selectedTasks: Task[] = [];
  draggedTask: Task | undefined | null;
  modalVisible = false;
  selectedTask!: Task;
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;

  constructor(
    private listTaskService: ListTaskService
  ) {
    this.getTaskToday("000000000000000000000001");
  }

  ngOnInit() {
    this.getTaskMechanic("000000000000000000000001");
  }

  getTaskMechanic(id: string) {
    this.listTaskService.getTaskMechanic(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: (tasks) => {
        this.availableTasks = tasks;
      },
      error: (err) => {
        console.error(err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la récupération liste tâches .');
      }
    })
  }

  startTask(id: string) {
    this.listTaskService.toStartTask(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: () => {
        this.getTaskMechanic("000000000000000000000001");
      },
      error: (err) => {
        console.error(err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la commencement de nouveau tâche.' + err);
      }
    })
  }

  finishTask(id: string) {
    this.listTaskService.toFinishTask(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: () => {
        this.getTaskMechanic("000000000000000000000001");
        this.messageComponent.showMessage('success', 'Tâche réussie', 'La tâche est terminée avec succès.');
      },
      error: (err) => {
        console.error(err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la finition de tâche.' + err);
      }
    })
  }

  getTaskToday(mechanicId: string) {
    this.listTaskService.getTaskToday(mechanicId).pipe(takeUntil(this.destroys$)).subscribe({
      next: (tasks) => {
        this.selectedTasks = tasks;
      },
      error: (err) => {
        console.error(err)
        this.messageComponent.showMessage('error', 'Erreur', "Échec de la récupération des tâches aujourd'hui." + err);
      }
    })
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }

  dragStart(task: Task) {
    this.draggedTask = task;
  }

  drop() {
    if (this.draggedTask) {
      if (this.draggedTask.datedebut == null) {
        this.messageComponent.showMessage('error', 'Erreur', "Commencez d'abord la tâche.");
      } else {
        this.finishTask(this.draggedTask._id!);
        let draggedProductIndex = this.findIndex(this.draggedTask);
        this.selectedTasks = [...(this.selectedTasks as Task[]), this.draggedTask];
        this.availableTasks = this.availableTasks?.filter((val, i) => i != draggedProductIndex);
        this.draggedTask = null;
      }
    }
  }

  dragEnd() {
    this.draggedTask = null;
  }

  findIndex(product: Task) {
    let index = -1;
    for (let i = 0; i < (this.availableTasks as Task[]).length; i++) {
      if (product._id === (this.availableTasks as Task[])[i]._id) {
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
