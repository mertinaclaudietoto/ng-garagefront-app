import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { IconFieldModule } from 'primeng/iconfield';
import { ImageModule } from 'primeng/image';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { Emp } from '../../../shared/models/emp';
import { EmpService } from '../../costumers/services/emp.service';
import { roles } from '../../../auth/guard/RULE';
@Component({
  selector: 'app-costumer',
  imports: [ ButtonModule,  GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule,TableModule,DialogModule],
  templateUrl: './costumer.component.html',
  styleUrl: './costumer.component.scss'
})
export class CostumerComponent {
  costumerList!:Emp[];
  constructor(private empService:EmpService){}
  ngOnInit() {
    this.empService.get(roles.costumer).subscribe(table=>{
      this.costumerList = table;
    } );
  }
}
