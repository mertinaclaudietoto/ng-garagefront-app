import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footerwidget',
  imports: [],
  templateUrl: './footerwidget.component.html',
  styleUrl: './footerwidget.component.scss'
})
export class FooterwidgetComponent {
  constructor(public router: Router) {}
}
