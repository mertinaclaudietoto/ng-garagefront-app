import { Routes } from '@angular/router';
import { CarTypeComponent } from '../../layout/car/car-type/car-type.component';
import { CarFormComponent } from '../car-form/car-form.component';

export default [
    { path: 'car-form', data: { breadcrumb: 'Menu' }, component: CarFormComponent },
    { path: 'car-type', data: { breadcrumb: 'Menu' }, component: CarTypeComponent},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
