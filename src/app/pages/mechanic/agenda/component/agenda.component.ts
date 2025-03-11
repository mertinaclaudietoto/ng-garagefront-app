import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule, CalendarModule,FluidModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  date: Date[] | undefined;
}
