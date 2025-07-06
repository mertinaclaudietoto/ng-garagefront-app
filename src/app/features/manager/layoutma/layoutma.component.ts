import { Component ,inject,AfterViewInit ,OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ServiceviewService } from '../../costumers/serviceview.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-layoutma',
  imports:[CommonModule,RouterModule],
  templateUrl: './layoutma.component.html',
  styleUrl: './layoutma.component.scss'
})
export class LayoutmaComponent implements OnInit {
    @ViewChild('mobileMenuBtn') mobileMenuBtnRef!: ElementRef;
    @ViewChild('mobileOverlay') mobileOverlayRef!: ElementRef;
    ouvrirMenu() {
      this.mobileOverlayRef.nativeElement.classList.remove('hidden');
      this.mobileMenuBtnRef.nativeElement.classList.add('hidden');
    }

    fermerMenu() {
      this.mobileOverlayRef.nativeElement.classList.add('hidden');
      this.mobileMenuBtnRef.nativeElement.classList.remove('hidden');
    }

    fermerMenuParOverlay(event: MouseEvent) {
      const overlayEl = this.mobileOverlayRef.nativeElement;
      if (event.target === overlayEl) {
        this.fermerMenu();
      }
    }
  
    model: MenuItem[] = [];
    readonly #paginationService = inject(ServiceviewService);
    getMenu(panier: number): MenuItem[] {
       const menu = [
            {label: 'Tableau de bord',icon: 'ri-function-line', routerLink: ['/manager/service-view']},
            {label: 'manager',icon: 'ri-service-line', routerLink: ['/manager/service']},
            {label: 'Panier',icon: 'ri-shopping-cart-line', routerLink: ['/manager/panier']},
            {label: 'Historique',icon: 'ri-archive-line', routerLink: ['/manager/story']},
            {label: 'Message',icon: 'ri-chat-1-line', routerLink: ['/manager/chat']},
            {label: 'Compte',icon: 'ri-profile-line', routerLink: ['/manager/compte']},
        ];
        return menu;  
    }
    ngOnInit() {
      this.#paginationService.panierCount$.subscribe(count => {
          // initialisation of menu data
          this.model = this.getMenu(count);
        });
    }
    @HostListener('window:scroll', [])
      onWindowScroll() {
        this.setActiveLink();
    }
   setActiveLink(): void {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      let current = 'home';

      sections.forEach((section: HTMLElement) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
          const id = section.getAttribute('id');
          if (id) current = id;
        }
      });

      navLinks.forEach((item) => {
        item.classList.remove('active');

        // Vérifie si le href contient l'id courant (ex: #services)
        if (item.getAttribute('href')?.includes(current)) {
          item.classList.add('active');
        }
      });
    }
}
