import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports:[CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  @Input() year!: number;
  @Input() moi!: string;

  @Input() month!: number; // 1 = Janvier, 12 = Décembre
  @Input() highlightedDays: number[] = [];

  daysInMonth: number[] = [];
  firstDayOfWeek = 0; // 0 = Sunday, 1 = Monday, etc.
  paddingStart: number = 0;

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDate = new Date(this.year, this.month - 1, 1);
    this.firstDayOfWeek = firstDate.getDay(); // Sunday = 0, Monday = 1, etc.

    // Pour commencer par Lundi (comme dans ton HTML)
    this.paddingStart = (this.firstDayOfWeek + 6) % 7;

    const totalDays = new Date(this.year, this.month, 0).getDate();
    this.daysInMonth = Array.from({ length: totalDays }, (_, i) => i + 1);
  }

  isHighlighted(day: number): boolean {
    return this.highlightedDays.includes(day);
  }
}
