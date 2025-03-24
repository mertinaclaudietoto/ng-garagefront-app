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
import { CarWeightComponent } from './app/features/carWeight/components/car-weight/car-weight.component';
import { ListServiceComponent } from './app/features/services/components/list-service/list-service.component';
import { FormServiceComponent } from './app/features/services/components/form-service/form-service.component';

import { LandingComponent } from './app/clients/landing/landing/landing.component';

import { RegisterComponent } from './app/auth/register/register.component';
import { LoginComponent } from './app/auth/login/login.component';
import { ProgressSrComponent } from './app/clients/progress-sr/progress-sr.component';

import { DetServiceComponent } from './app/clients/det-service/det-service.component';


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
            { path: 'car-weight', component: CarWeightComponent },
            {
                path: 'services',
                children: [
                    { path: '', component: ListServiceComponent },
                    { path: 'form', component: FormServiceComponent },
                ]
            }
        ]
    },
    // {
    //     path: 'client',
    //     component: LayoutComponent,
    //     children: [
    //         { path: '', component: ServiceComponent },
    //         { path: 'about', component: AboutComponent },
    //         { path: 'sign-in', component: SignInComponent },
    //         { path: 'works', component: ListWorksComponent },
    //     ]
    // },
    {
        path:'client',
        component: LandingComponent,
    },
    // { path: 'client/cars-client', component: CarClientsComponent },
    { path: 'client/progress-service', component: ProgressSrComponent },
    { path: 'client/det-services', component: DetServiceComponent },
    {
        path:'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    // {
    //     path:'landing',component: LandingComponent
    // },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
