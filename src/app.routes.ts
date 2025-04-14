import { Routes } from '@angular/router';
import { LayoutappComponent } from './app/layout/layoutapp/layoutapp.component';
import { Notfound } from './app/features/notfound/notfound';
import { CarSizeComponent } from './app/features/carSize/components/car-size/car-size.component';
import { ListServiceComponent } from './app/features/services/components/list-service/list-service.component';
import { FormServiceComponent } from './app/features/services/components/form-service/form-service.component';
import { LandingComponent } from './app/features/costumers/landing/landing/landing.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { LoginComponent } from './app/auth/login/login.component';
import { DashboardComponent } from './app/features/manager/dashboard/dashboard/dashboard.component';
import { ListTaskComponent } from './app/features/mechanic/task/components/list-task/list-task.component';
import { AgendaComponent } from './app/features/mechanic/agenda/component/agenda.component';
import { SatisfactionComponent } from './app/features/mechanic/customer-satisfaction/components/satisfaction/satisfaction.component';
// import { EmpComponent } from './app/features/employee/emp/emp.component';
import {EmpComponent}  from './app/features/manager/emp/emp.component';
import { authGuard } from './app/auth/guard/auth.guard';
import { roleManagerGuard } from './app/auth/guard/role-manager.guard';
import { ServicesCarComponent } from './app/features/manager/services-car/services-car.component';
import { ServiceviewComponent } from './app/features/costumers/serviceview/serviceview.component';
import { roleCostumerGuard } from './app/auth/guard/role-costumer.guard';
import { PanierviewComponent } from './app/features/costumers/panierview/panierview.component';
import { HistoriqueComponent } from './app/features/costumers/historique/historique.component';
// import { EmployeeFormComponent } from './app/features/employee/employee-form/employee-form.component';
import { TypeServiceComponent } from './app/features/manager/services-car/components/type-service/type-service.component';
import { Statistique } from './app/features/manager/dashboard/statistique/chartdemo';
export const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: '', component: ServicesCarComponent },
        ]
    },
    {
        path: 'client',
        component: LayoutappComponent,
        canActivate: [authGuard, roleCostumerGuard],
        children: [
            { path: '', component: LandingComponent },
            { path: 'service-view', component: ServiceviewComponent },
            { path: 'panier-view', component: PanierviewComponent },
            { path: 'historique-view', component: HistoriqueComponent },
        ]
    },
    {
        path: 'mechanic',
        component: LayoutappComponent,
        children: [
            { path: '', component: ListTaskComponent },
            { path: 'agenda-mechanic', component: AgendaComponent },
            { path: 'satisfaction-customer-mechanic', component: SatisfactionComponent },
        ]
    },
    {
        path: 'employee',
        component: LayoutappComponent,
        children: [
            { path: '', component: EmpComponent },
            // { path: 'form', component: EmployeeFormComponent },
            // { path: 'edit/:id', component: EmployeeFormComponent }
        ]
    },
    {
        path: 'manager',
        component: LayoutappComponent,
        canActivate: [authGuard, roleManagerGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'service-garage', component: ServicesCarComponent },
            { path: 'type-service', component: TypeServiceComponent },
            { path: 'car-size', component: CarSizeComponent }, 
            { path: 'emp', component: EmpComponent }, 
            { path: 'statistique', component: Statistique }, 
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
