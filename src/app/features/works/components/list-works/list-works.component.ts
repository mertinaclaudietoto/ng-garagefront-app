import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Work } from '../../models/work.model';

@Component({
  selector: 'app-list-works',
  imports: [TableModule],
  templateUrl: './list-works.component.html',
  styleUrl: './list-works.component.scss'
})
export class ListWorksComponent {
  listWorks: Work[] = [];
}
