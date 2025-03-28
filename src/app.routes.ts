import { Routes } from '@angular/router';
// import { AppLayout } from './app/layout/component/app.layout';
import { LayoutappComponent } from './app/layout/layoutapp/layoutapp.component';
import { Notfound } from './app/features/notfound/notfound';
import { CarFormComponent } from './app/features/costumers/car-form/car-form.component';

import { CarTypeComponent } from './app/features/carType/components/car-type/car-type.component';
import { CarSizeComponent } from './app/features/carSize/components/car-size/car-size.component';
import { CarEngineComponent } from './app/features/carEngine/components/car-engine/car-engine.component';
import { CarWeightComponent } from './app/features/carWeight/components/car-weight/car-weight.component';
import { ListServiceComponent } from './app/features/services/components/list-service/list-service.component';
import { FormServiceComponent } from './app/features/services/components/form-service/form-service.component';
import { LandingComponent } from './app/features/costumers/landing/landing/landing.component';
import { ProgressSrComponent } from './app/features/costumers/progress-sr/progress-sr.component';
import { DetServiceComponent } from './app/features/costumers/det-service/det-service.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { LoginComponent } from './app/auth/login/login.component';
import { CarClientsComponent } from './app/features/costumers/car-clients/car-clients.component';

import { DashboardComponent } from './app/features/manager/dashboard/dashboard/dashboard.component';
import { authGuard } from './app/auth/guard/auth.guard';
import { roleManagerGuard } from './app/auth/guard/role-manager.guard';
export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutappComponent,
        children: [
            { path: '', component: CarFormComponent },
            { path: 'manager', component: DashboardComponent,canActivate: [authGuard,roleManagerGuard], },
            { path: 'uikit', loadChildren: () => import('./app/features/uikit/uikit.routes') },
            { path: 'pages', loadChildren: () => import('./app/features/pages.routes') },
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
   
    {
        path:'manager',
        component: DashboardComponent,
    },
    {
        path:'client',
        component: LandingComponent,
    },
    { path: 'client/cars-client', component: CarClientsComponent },
    { path: 'client/progress-service', component: ProgressSrComponent },
    { path: 'client/det-services', component: DetServiceComponent },
    {
        path:'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
