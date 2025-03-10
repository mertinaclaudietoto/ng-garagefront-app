
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tabe-filtre',
  imports:[TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, CommonModule],
  templateUrl: './tabe-filtre.component.html',
  styleUrl: './tabe-filtre.component.scss'
})
export class TabeFiltreComponent {

}
