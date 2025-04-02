import { MenuItem } from 'primeng/api';
import { roles } from '../../auth/guard/RULE';
import { BehaviorSubject } from 'rxjs';

function getMenu(): MenuItem[] {
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
    const panierSubject = new BehaviorSubject<number>(
        (JSON.parse(localStorage.getItem('panierlist') || '[]') as any[]).length
    );
    let panierclient = 'Panier ';
    panierSubject.asObservable().subscribe(count => {
        panierclient = 'Panier ' + count;
        console.log('Panier mis à jour, nombre d\'éléments :', count);
    });

    console.log((JSON.parse(localStorage.getItem('panierlist') || '[]') as any[]).length);


    const menuCustomer = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/client/service-view'] }]
        },
        {
            label: 'Service',
            items: [{ label: panierclient, icon: 'pi pi-shopping-cart', routerLink: ['/client/service-view'] }]
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

export const DATAMENU: MenuItem[] = getMenu();
