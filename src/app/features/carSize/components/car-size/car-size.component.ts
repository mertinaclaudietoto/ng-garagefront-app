import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CarSize } from '../../../../shared/models/carSize.model';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { ConfirmationDeleteComponent } from '../../../../shared/components/confirmation-delete/confirmation-delete.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { CarSizeService } from '../../services/car-size.service';
import { CarSizeFormComponent } from '../car-size-form/car-size-form.component';

@Component({
  selector: 'app-car-size',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MessageComponent,
    ConfirmationDeleteComponent,
    CarSizeFormComponent
  ],
  providers: [ConfirmationService],
  templateUrl: './car-size.component.html',
  styleUrl: './car-size.component.scss'
})
export class CarSizeComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  carSizeList: CarSize[] = [];
  modalVisible = false;
  careSize: CarSize | null = null;

  constructor(private carSizeService: CarSizeService) { }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }

  ngOnInit(): void {
    this.getAllCarSize();
  }

  updateCarSize(carSize: CarSize) {
    this.careSize = carSize;
    this.modalVisible = true;
  }

  onCarSizeCreated() {
    this.getAllCarSize();
  }

  handleDelete(id: string) {
    this.deleteCarSize(id);
  }

  handleReject() {
  }

  showConfirmation(id: string) {
    this.confirmationDeleteComponent.show(id);
  }

  deleteCarSize(id: string) {
    this.carSizeService.deleteCarType(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: (sizes) => {
        this.getAllCarSize();
        this.messageComponent.showMessage('success', 'Suppression réussie', 'La taille de voiture a été supprimé.');
      },
      error: (err) => {
        console.error('Error delete car types:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la suppression du taille de voiture.');
      }
    })
  }

  getAllCarSize() {
    this.carSizeService.getAllCarSizes().pipe(takeUntil(this.destroys$)).subscribe({
      next: (carSizes) => {
        this.carSizeList = carSizes;
      },
      error: (err) => {
        console.error('Error fetching car types:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Error fetching car sizes');
      }
    })
  }

  addCarSize() {
    this.careSize = null;
    this.modalVisible = true;
  }
}
