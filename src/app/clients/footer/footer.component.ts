import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
  .wave-gradient {
    width: 100%;
    height: 300px;
    background: linear-gradient(45deg, #ff7eb3, #ff758c, #ff2d75);
    clip-path: path("M0,160 C120,220 280,120 400,160 C520,200 680,100 800,160 C920,220 1080,120 1200,160 L1200,300 L0,300 Z");
  }
  `
})
export class FooterComponent {

}
