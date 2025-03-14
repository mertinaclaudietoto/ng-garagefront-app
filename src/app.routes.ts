import { Routes } from '@angular/router';
// import { AppLayout } from './app/layout/component/app.layout';
import { LayoutappComponent } from './app/layout/layoutapp/layoutapp.component';

import { Notfound } from './app/pages/notfound/notfound';

import { CarFormComponent } from './app/pages/car-form/car-form.component';
import { LayoutComponent } from './app/clients/layout/layout.component';
export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutappComponent,
        children: [
            { path: '', component: CarFormComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    {
        path: 'client',
        component: LayoutComponent
    },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
