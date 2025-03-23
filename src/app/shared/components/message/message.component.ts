import { ToastModule } from 'primeng/toast';
import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-message',
  imports: [ToastModule],
  providers: [MessageService],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor(private messageService: MessageService) { }
  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }
}
