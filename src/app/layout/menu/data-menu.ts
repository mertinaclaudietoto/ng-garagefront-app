import { MenuItem } from 'primeng/api';

export const DATAMENU: MenuItem[] = [
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/manager'] }]
    },
    {
        label: 'Services',
        items: [
            { label: 'Car form', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/car-form'] },
            { label: 'Car-type', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/car-type'] },
            { label: 'Service price', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/service-price'] },
            { label: 'Empployee', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/emp'] },
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
];