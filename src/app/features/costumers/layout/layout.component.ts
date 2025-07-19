import { Component ,inject,AfterViewInit ,OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { roles } from '../../../auth/guard/RULE';
import { MenuItem } from 'primeng/api';
import { ServiceviewService } from '../serviceview.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  

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
        let panierclient = 'Panier ' + panier;
        const menu= [
            {label: 'Tableau de bord',icon: 'ri-function-line', routerLink: ['/client/service-view']},
            {label: 'Service',icon: 'ri-service-line', routerLink: ['/client/service']},
            {label: 'Panier',icon: 'ri-shopping-cart-line', routerLink: ['/client/panier']},
            {label: 'Historique',icon: 'ri-archive-line', routerLink: ['/client/story']},
            {label: 'Message',icon: 'ri-chat-1-line', routerLink: ['/client/chat']},
            {label: 'Compte',icon: 'ri-profile-line', routerLink: ['/client/compte']},
            {label: 'Avis Client',icon: 'ri-profile-line', routerLink: ['/client/opinion']},
        ];
        const menuMechanic = [ {
            label: 'Mécanicien',
                items: [
                    { label: 'Tâches', icon: '', routerLink: ['/mechanic/'] },
                    { label: 'Agenda', icon: '', routerLink: ['/mechanic/agenda-mechanic'] },
                    { label: 'Statistique', icon: '', routerLink: ['/mechanic/satisfaction-customer-mechanic'] }
                ]
            }
        ];
      return menu;
       
    }
  ngOnInit() {
      this.#paginationService.panierCount$.subscribe(count => {
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
