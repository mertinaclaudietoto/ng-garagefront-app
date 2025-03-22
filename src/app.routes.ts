import { Routes } from '@angular/router';
// import { AppLayout } from './app/layout/component/app.layout';
import { LayoutappComponent } from './app/layout/layoutapp/layoutapp.component';

import { Notfound } from './app/pages/notfound/notfound';

import { CarFormComponent } from './app/pages/car-form/car-form.component';
import { LayoutComponent } from './app/clients/layout/layout.component';
import { ServiceComponent } from './app/clients/service/service.component';
import { AboutComponent } from './app/clients/about/about.component';
import { SignInComponent } from './app/clients/sign-in/sign-in.component';
import { ListWorksComponent } from './app/clients/works/components/list-works/list-works.component';
import { CarTypeComponent } from './app/features/carType/components/car-type/car-type.component';
import { CarSizeComponent } from './app/features/carSize/components/car-size/car-size.component';
import { CarEngineComponent } from './app/features/carEngine/components/car-engine/car-engine.component';
export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutappComponent,
        children: [
            { path: '', component: CarFormComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'car-type', component: CarTypeComponent },
            { path: 'car-size', component: CarSizeComponent },
            { path: 'car-engine', component: CarEngineComponent },
        ]
    },
    {
        path: 'client',
        component: LayoutComponent,
        children: [
            { path: '', component: ServiceComponent },
            { path: 'about', component: AboutComponent },
            { path: 'sign-in', component: SignInComponent },
            { path: 'works', component: ListWorksComponent }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
