import { Routes } from '@angular/router';
import { CarTypeComponent } from '../../layout/car/car-type/car-type.component';
import { CarFormComponent } from '../car-form/car-form.component';
import { ServiceComponent } from '../service/service.component';
import { EmpComponent } from '../emp/emp.component';
export default [
    { path: 'car-form', data: { breadcrumb: 'Menu' }, component: CarFormComponent },
    { path: 'car-type', data: { breadcrumb: 'Menu' }, component: CarTypeComponent},
    { path: 'serviceprice', data: { breadcrumb: 'Menu' }, component: ServiceComponent},
    { path: 'emp', data: { breadcrumb: 'Menu' }, component: EmpComponent},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
