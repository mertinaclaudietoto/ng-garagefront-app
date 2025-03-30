import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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


@Component({
  selector: 'app-agenda',
  imports: [FormsModule,
    CalendarModule,
    FluidModule,
    ScrollPanelModule,
    NgFor,
    ButtonModule,
    ModalDetailTaskComponent,
    FullCalendarModule
  ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  // date: Date[] | undefined;
  // availableProducts: Task[] | undefined;
  // modalVisible = false;
  // selectedTask!: Task;

  // ngOnInit() {
  // }

  // selectDate(event: Date) {
  //   console.log(event);
  //   // this.availableProducts = tasks;
  // }

  // showModal(task: Task) {
  //   this.selectedTask = task;
  //   this.modalVisible = true;
  // }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: frLocale,
    views: {
      dayGridMonth: {}, // Ajoute cette ligne
    },
    dateClick: this.handleDateClick.bind(this), // Clic sur une date
    eventClick: this.handleEventClick.bind(this),
    events: [
      { title: 'Véhicule : 234433', date: '2025-03-01' }, // Mets une date actuelle
      { title: 'Véhicule: 2323', date: '2025-03-02' }
    ]
  };

  constructor() {
  }

  handleDateClick(arg: any) {
    alert('Date cliquée : ' + arg.dateStr);
  }

  handleEventClick(info: any) {
    alert('Événement cliqué : ' + info.event.title + '\nDate : ' + info.event.startStr);
  }
}
