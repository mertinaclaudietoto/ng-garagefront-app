import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Subject, takeUntil } from 'rxjs';
import { Service } from '../../../../shared/models/service.model';
import { MessageComponent } from '../../../../shared/components/message/message.component';

@Component({
  selector: 'app-list-service',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    MessageComponent
  ],
  templateUrl: './list-service.component.html',
  styleUrl: './list-service.component.scss'
})
export class ListServiceComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  serviceList: Service[] = [];

  constructor(
    private router: Router,
    private serviceService: ServiceService,
  ) { }

  ngOnInit(): void {
    this.getAllCarTypes();
  }

  getAllCarTypes() {
    this.serviceService.getAllServices().pipe(takeUntil(this.destroys$)).subscribe({
      next: (services) => {
        this.serviceList = services;
      },
      error: (err) => {
        console.error('Error fetching services:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Error fetching services');
      }
    })
  }

  addService() {
    this.router.navigate(['/services/form']);
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }

  deleteService(id: string) {
    this.serviceService.deleteService(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: () => {
        this.messageComponent.showMessage('success', 'Suppression réussie', 'Le service a été supprimé avec succès.');
        this.getAllCarTypes();
      },
      error: (err) => {
        console.error('Error fetching services:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Error delete service');
      }
    })
  }
}
