import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../../layout/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule, MenubarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor() { }
}
