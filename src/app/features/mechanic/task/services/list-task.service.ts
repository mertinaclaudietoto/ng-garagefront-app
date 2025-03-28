import { Injectable } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';
import { Observable } from 'rxjs';
import { environement } from '../../../../../environement/environement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListTaskService {
  private urlServiceClient = environement.apiUrl + 'services-client';
  constructor(private http: HttpClient) { }

  getTaskMechanic(mechanicId: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlServiceClient + '/task/' + mechanicId);
  }

  toStartTask(taskId: string) {
    return this.http.get(this.urlServiceClient + '/task-start/' + taskId);
  }
}
