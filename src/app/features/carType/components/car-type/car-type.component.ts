import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CarType } from '../../../../shared/models/carType.model';
import { ButtonModule } from 'primeng/button';
import { Subject, takeUntil } from 'rxjs';
import { CarTypeService } from '../../services/car-type.service';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmationDeleteComponent } from '../../../../shared/components/confirmation-delete/confirmation-delete.component';
import { CarTypeFormComponent } from '../car-type-form/car-type-form.component';

@Component({
  selector: 'app-car-type',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MessageComponent,
    ConfirmationDeleteComponent,
    CarTypeFormComponent
  ],
  providers: [ConfirmationService],
  templateUrl: './car-type.component.html',
  styleUrl: './car-type.component.scss'
})
export class CarTypeComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  carTypeList: CarType[] = [];
  modalVisible = false;
  carType: CarType | null = null;

  constructor(
    private cartTypeService: CarTypeService
  ) { }

  ngOnInit(): void {
    this.getAllCarTypes();
  }

  updateCarType(carType: CarType) {
    this.carType = carType;
    this.modalVisible = true;
  }

  onCarTypeCreated() {
    this.getAllCarTypes();
  }

  deleteCarType(id: string) {
    this.cartTypeService.deleteCarType(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
        this.getAllCarTypes();
        this.messageComponent.showMessage('success', 'Suppression réussie', 'Le type de voiture a été supprimé.');
      },
      error: (err) => {
        console.error('Error delete car types:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Échec de la suppression du type de voiture.');
      }
    })
  }

  handleDelete(id: string) {
    this.deleteCarType(id);
  }

  handleReject() {
  }

  showConfirmation(id: string) {
    this.confirmationDeleteComponent.show(id);
  }

  addCar() {
    this.carType = null;
    this.modalVisible = true;
  }

  getAllCarTypes() {
    this.cartTypeService.getAllCartTypes().pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
        this.carTypeList = types;
      },
      error: (err) => {
        console.error('Error fetching car types:', err)
        this.messageComponent.showMessage('error', 'Erreur', 'Error fetching car types');
      }
    })
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
