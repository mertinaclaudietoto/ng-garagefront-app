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
import { LandingComponent } from './app/clients/landing/landing/landing.component';

import { RegisterComponent } from './app/auth/register/register.component';
import { LoginComponent } from './app/auth/login/login.component';
import { ProgressSrComponent } from './app/clients/progress-sr/progress-sr.component';
import { CarClientsComponent } from './app/clients/car-clients/car-clients.component';

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
        component: LayoutComponent,
        children: [
            { path: '', component: ServiceComponent },
            { path: 'about', component: AboutComponent },
            { path: 'sign-in', component: SignInComponent },
            { path: 'works', component: ListWorksComponent },
        ]
    },
    {
        path:'nclient',
        // component: LandingComponent,
        children: [
            { path: 'progress-service', component: ProgressSrComponent },
            { path: 'cars-client', component: CarClientsComponent },
        ]

    },
    {
        path:'auth',
        // component: LandingComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]

    },
    {
        path:'landing',component: LandingComponent
    },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
