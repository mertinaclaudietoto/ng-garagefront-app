import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { ConfirmationDeleteComponent } from '../../../../shared/components/confirmation-delete/confirmation-delete.component';
import { Subject, takeUntil } from 'rxjs';
import { EngineType } from '../../../../shared/models/engineType.model';
import { CarEngineService } from '../../services/car-engine.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-car-engine',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MessageComponent,
    ConfirmationDeleteComponent,
  ],
  providers: [ConfirmationService],
  templateUrl: './car-engine.component.html',
  styleUrl: './car-engine.component.scss'
})
export class CarEngineComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  carEngineList: EngineType[] = [];
  modalVisible = false;
  engineType: EngineType | null = null;

  constructor(
    private cartEngineService: CarEngineService
  ) { }

  ngOnInit(): void {
    this.getAllCarEngines();
  }

  getAllCarEngines() {
    this.cartEngineService.getAllCarEngines().pipe(takeUntil(this.destroys$)).subscribe({
      next: (engines) => {
        this.carEngineList = engines;
      },
      error: (err) => {
        console.error('Error fetching car engines:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Error fetching car engines');
      }
    })
  }

  handleDelete(id: string) {
  }

  handleReject() {
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
