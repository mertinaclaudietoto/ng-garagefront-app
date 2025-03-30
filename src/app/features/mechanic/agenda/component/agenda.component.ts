import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FluidModule } from 'primeng/fluid';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { ModalDetailTaskComponent } from '../../../../shared/components/modal-detail-task/modal-detail-task.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { Task } from '../../../../shared/models/task.model';
import { AgendaService } from '../services/agenda.service';
import { Subject, takeUntil } from 'rxjs';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { ConfirmationService } from 'primeng/api';

interface EventCallendar {
  serviceId: string;
  title: string;
  date: string
}

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,
    CalendarModule,
    FluidModule,
    ScrollPanelModule,
    ButtonModule,
    ModalDetailTaskComponent,
    FullCalendarModule
  ],
  providers: [ConfirmationService],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent implements OnInit, OnDestroy {
  modalVisible = false;
  selectedTask!: Task;
  events: any[] = [];
  calendarOptions!: CalendarOptions;
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.getAllTaskMechanic("000000000000000000000001");
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin],
      locale: frLocale,
      views: {
        dayGridMonth: {},
      },
      eventClick: this.handleEventClick.bind(this),
      events: this.events
    };
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }

  handleEventClick(info: any) {
    const serviceId = info.event._def.extendedProps.serviceId;
    this.getTaskById(serviceId);
  }

  getAllTaskMechanic(id: string) {
    this.agendaService.getAllTaskMechanic(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: (tasks) => {
        const newEvents = tasks
          .filter(task => task.datedebut)
          .map(task => {
            const formattedDate = this.castDateString(task.datedebut);
            return {
              serviceId: task._id,
              title: `${task.carCustomer.model} : ${task.carCustomer.empathement}`,
              date: formattedDate
            } as EventCallendar;
          });
        this.events = [...this.events, ...newEvents];
        this.calendarOptions = {
          ...this.calendarOptions,
          events: this.events
        };
      },
      error: (err) => {
        console.error(err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la récupération liste tâches .');
      }
    })
  }

  getTaskById(taskId: string) {
    this.agendaService.getTaskByiD(taskId).pipe(takeUntil(this.destroys$)).subscribe({
      next: (task) => {
        this.selectedTask = task;
        this.modalVisible = true;
      },
      error: (err) => {
        console.error(err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la récupération de tâche id: ' + taskId);
      }
    })
  }

  castDateString(dateInput: string | Date): string {
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${year}-${month}-${day}`;
  }
}
