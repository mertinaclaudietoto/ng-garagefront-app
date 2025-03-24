import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Task } from '../../../features/mechanic/task/models/task.model';

@Component({
  selector: 'app-modal-detail-task',
  imports: [Dialog],
  templateUrl: './modal-detail-task.component.html',
  styleUrl: './modal-detail-task.component.scss'
})
export class ModalDetailTaskComponent {
  @Input() task!: Task;
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  onHide() {
    this.display = false;
    this.displayChange.emit(false);
  }
}
