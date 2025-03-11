import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
// import { MenuitemComponent } from '../../menuitem/menuitem.component';
import { MenuitemComponent } from '../menuitem/menuitem.component';

import { DATAMENU } from './data-menu';
@Component({
  selector: 'app-menu',
  imports: [CommonModule,  MenuitemComponent, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
    model: MenuItem[] = [];
    ngOnInit() {
        this.model = DATAMENU;
    }

}
