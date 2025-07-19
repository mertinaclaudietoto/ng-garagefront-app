import { Component, ElementRef ,AfterViewInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sidebar',
  imports: [MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent  implements AfterViewInit {
  constructor(public el: ElementRef) { }
  ngAfterViewInit() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    if (mobileMenuBtn && mobileOverlay && closeMobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
          mobileOverlay.classList.remove('hidden');
      });
      closeMobileMenu.addEventListener('click', () => {
          mobileOverlay.classList.add('hidden');
      });
      mobileOverlay.addEventListener('click', (e) => {
          if (e.target === mobileOverlay) {
              mobileOverlay.classList.add('hidden');
          }
      }); 
    }

  }
}
