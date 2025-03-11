import { Routes } from '@angular/router';
import { CarTypeComponent } from '../../layout/car/car-type/car-type.component';
import { CarFormComponent } from '../car-form/car-form.component';
import { ListTaskComponent } from '../mechanic/task/components/list-task/list-task.component';
import { AgendaComponent } from '../mechanic/agenda/component/agenda.component';

export default [
    { path: 'car-form', data: { breadcrumb: 'Menu' }, component: CarFormComponent },
    { path: 'car-type', data: { breadcrumb: 'Menu' }, component: CarTypeComponent },
    { path: 'task-mechanic', component: ListTaskComponent },
    { path: 'agenda-mechanic', component: AgendaComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
