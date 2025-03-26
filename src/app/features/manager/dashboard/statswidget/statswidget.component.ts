import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-statswidget',
  imports: [CommonModule],
  templateUrl: './statswidget.component.html',
  styleUrl: './statswidget.component.scss'
})
export class StatswidgetComponent {
  @Input() nbrCostumer: number = 0;
  @Input() nbrTacheencours: number = 0;
  @Input() nbrTacheenAttent: number = 0;
  @Input() nbrEmployeedispo: number = 0;
  @Input() nbrMechanic: number = 0;

  
}
