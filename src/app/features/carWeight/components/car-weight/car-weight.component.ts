import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { ConfirmationDeleteComponent } from '../../../../shared/components/confirmation-delete/confirmation-delete.component';
import { CarWeight } from '../../../../shared/models/carWeight.model';
import { CarWeightService } from '../../services/car-weight.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-car-weight',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MessageComponent,
    ConfirmationDeleteComponent,
  ],
  providers: [ConfirmationService],
  templateUrl: './car-weight.component.html',
  styleUrl: './car-weight.component.scss'
})
export class CarWeightComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  carWeightList: CarWeight[] = [];
  modalVisible = false;
  engineType: CarWeight | null = null;

  constructor(
    private carWeightService: CarWeightService
  ) { }

  ngOnInit(): void {
    this.getAllCarWeights();
  }

  getAllCarWeights() {
    this.carWeightService.getAllCarWeights().pipe(takeUntil(this.destroys$)).subscribe({
      next: (weights) => {
        this.carWeightList = weights;
      },
      error: (err) => {
        console.error('Error fetching car weight:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Error fetching car weights');
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
