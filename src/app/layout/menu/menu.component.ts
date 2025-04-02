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
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/manager/dashboard'] }]
            },
            {
                label: 'Manager',
                items: [
                    { label: 'Services', icon: 'pi pi-fw pi-table', routerLink: ['/manager/service-garage'] },
                    { label: 'Employee', icon: 'pi pi-fw pi-table', routerLink: ['/employee'] },
                    { label: 'Services', icon: 'pi pi-fw pi-database', routerLink: ['/services'] },
                    {
                        label: 'Services',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            { label: 'Type service', icon: 'pi pi-fw pi-sign-in', routerLink: ['/manager/type-service'] },
                            { label: 'Service', icon: 'pi pi-fw pi-times-circle', routerLink: ['/manager/service-garage'] }
                        ]
                    }
                ]
            },
            {
                label: 'Mécanicien',
                items: [
                    { label: 'Tâches', icon: 'pi pi-fw pi-table', routerLink: ['/mechanic/'] },
                    { label: 'Agenda', icon: 'pi pi-fw pi-database', routerLink: ['/mechanic/agenda-mechanic'] },
                    { label: 'Statistique', icon: 'pi pi-fw pi-database', routerLink: ['/mechanic/satisfaction-customer-mechanic'] }
                ]
            }
        ];

        let panierclient = 'Panier ' + panier;

        const menuCustomer = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/client/service-view'] }]
            },
            {
                label: 'Service',
                items: [
                    { label: panierclient, icon: '', routerLink: ['/client/panier-view'] },
                    { label: "historique", icon: '', routerLink: ['/client/historique-view'] },
                ]
            },
        ];
        const menuMechanic = [...menuManager];
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
