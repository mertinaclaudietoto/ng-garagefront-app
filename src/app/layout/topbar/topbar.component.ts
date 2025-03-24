import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../layout.service';
import { ConfiguratorComponent } from '../../shared/components/configurator/configurator.component';
@Component({
  selector: 'app-topbar',
  imports: [RouterModule, CommonModule, StyleClassModule, ConfiguratorComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
      this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
