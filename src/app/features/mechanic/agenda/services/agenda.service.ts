import { Injectable } from '@angular/core';
import { environement } from '../../../../../environement/environement';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../../../shared/models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private urlServiceClient = environement.apiUrl + 'services-client';
  constructor(private http: HttpClient) { }

  getAllTaskMechanic(mechanicId: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlServiceClient + '/all-task-mechanic/' + mechanicId);
  }

  getTaskByiD(taskId: string): Observable<Task> {
    return this.http.get<Task>(this.urlServiceClient + '/task-detail/' + taskId);
  }
}
