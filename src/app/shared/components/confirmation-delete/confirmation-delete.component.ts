import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-confirmation-delete',
  imports: [
    ConfirmDialogModule,
    ButtonModule
  ],
  templateUrl: './confirmation-delete.component.html',
  styleUrl: './confirmation-delete.component.scss'
})
export class ConfirmationDeleteComponent {
  @Input() header?: string;
  @Input() message?: string;
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<void>();

  constructor(private confirmationService: ConfirmationService) { }

  show(objectId: string) {
    this.confirmationService.confirm({
      header: this.header,
      message: this.message,
      accept: () => this.accept.emit(objectId),
      reject: () => this.reject.emit()
    });
  }
}
