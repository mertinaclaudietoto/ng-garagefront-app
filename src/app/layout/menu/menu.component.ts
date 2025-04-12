import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
// import { MenuitemComponent } from '../../menuitem/menuitem.component';
import { MenuitemComponent } from '../menuitem/menuitem.component';
import { roles } from '../../auth/guard/RULE';
import { DATAMENU } from './data-menu';
import { ServiceviewService } from '../../features/costumers/serviceview.service';
@Component({
    selector: 'app-menu',
    imports: [CommonModule, MenuitemComponent, RouterModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
    model: MenuItem[] = [];
    readonly #paginationService = inject(ServiceviewService);
    getMenu(panier: number): MenuItem[] {
        const menuManager = [
            {
                label: 'Manager',
                items: [{ label: 'Dashboard', icon: '', routerLink: ['/manager/dashboard'] }]
            },
            {    
                items: [{ label: 'Services', icon: '', routerLink: ['/manager/service-garage'] }]
            },
            {    
                items: [{ label: 'Employé', icon: '', routerLink: ['/employee'] }]
            }
        ];
        let panierclient = 'Panier ' + panier;
        const menuCustomer = [
            {
                label: 'Home',
                items: [{ label: 'home', icon: '', routerLink: ['/client/service-view'] }]
            },
            {
                label: 'Service',
                items: [
                    { label: panierclient, icon: '', routerLink: ['/client/panier-view'] },
                    { label: "historique", icon: '', routerLink: ['/client/historique-view'] },
                ]
            },
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
        const userRole = localStorage.getItem("idrule");
        if (userRole === roles.manager) {
            return menuManager;
        } else if (userRole === roles.costumer) {
            return menuCustomer;
        } else if (userRole === roles.mechanic) {
            return menuMechanic;
        } else {
            return [];
        }
    }

    ngOnInit() {
        this.#paginationService.panierCount$.subscribe(count => {
            this.model = this.getMenu(count);
        });

    }

}
