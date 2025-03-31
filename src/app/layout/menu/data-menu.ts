import { MenuItem } from 'primeng/api';

export const DATAMENU: MenuItem[] = [
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/manager/dashboard'] }]
    },
    {
        label: 'Services',
        items: [
            { label: 'Services', icon: 'pi pi-fw pi-table', routerLink: ['/manager/service-garage'] },
            { label: 'Employee', icon: 'pi pi-fw pi-table', routerLink: ['/employee'] },
            { label: 'Services', icon: 'pi pi-fw pi-database', routerLink: ['/services'] },
            {
                label: 'Paramètres',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Taille',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/car-size']
                    },
                    {
                        label: 'Moteur',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['/car-engine']
                    },
                    {
                        label: 'Type',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/car-type']
                    },
                    {
                        label: 'Poids',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/car-weight']
                    }
                ]
            },
        ]
    },
    {
        label: 'Mécanicien',
        items: [
            { label: 'Tâches', icon: 'pi pi-fw pi-table', routerLink: ['/mechanic/'] },
            { label: 'Agenda', icon: 'pi pi-fw pi-database', routerLink: ['/mechanic/agenda-mechanic'] },
            { label: 'Statistique', icon: 'pi pi-fw pi-database', routerLink: ['/mechanic/satisfaction-customer-mechanic'] },
        ]
    },
];