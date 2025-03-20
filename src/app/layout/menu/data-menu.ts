import { MenuItem } from 'primeng/api';

export const DATAMENU: MenuItem[] = [
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
    },
    {
        label: 'UI Components',
        items: [
            { label: 'Car form', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/car-form'] },
            { label: 'Car-type', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/car-type'] },
            { label: 'Service price', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/service-price'] },
            { label: 'Empployee', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/emp'] },
            {
                label: 'Paramètres',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Taille',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/car-type']
                    },
                    {
                        label: 'Moteur',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['/auth/error']
                    },
                    {
                        label: 'Type',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/auth/access']
                    },
                    {
                        label: 'Poids',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/auth/access']
                    }
                ]
            },
        ]
    },
    {
        label: 'Mecanicien',
        items: [
            { label: 'Tâches', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/task-mechanic'] },
            { label: 'Calendrier', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/agenda-mechanic'] },
            { label: 'Avis Clients', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/satisfaction-customer-mechanic'] },
        ]
    },
    {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
            {
                label: 'Landing',
                icon: 'pi pi-fw pi-globe',
                routerLink: ['/landing']
            },
            {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['/auth/error']
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/auth/access']
                    }
                ]
            },
            {
                label: 'Crud',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud']
            },
            {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/pages/notfound']
            },
            {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['/pages/empty']
            }
        ]
    },
    {
        label: 'Hierarchy',
        items: [
            {
                label: 'Submenu 1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 1.1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'Submenu 1.2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                    }
                ]
            },
            {
                label: 'Submenu 2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'Submenu 2.2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                    }
                ]
            }
        ]
    },
    {
        label: 'Get Started',
        items: [
            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-book',
                routerLink: ['/documentation']
            },
            {
                label: 'View Source',
                icon: 'pi pi-fw pi-github',
                url: 'https://github.com/primefaces/sakai-ng',
                target: '_blank'
            }
        ]
    }
];