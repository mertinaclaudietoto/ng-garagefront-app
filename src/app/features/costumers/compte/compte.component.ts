import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Emp } from '../../../shared/models/emp';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-compte',
  imports: [CommonModule,FormsModule],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.scss'
})
export class CompteComponent {
 emp :Emp = new Emp();
}
