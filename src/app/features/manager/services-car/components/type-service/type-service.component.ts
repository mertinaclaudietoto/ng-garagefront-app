import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MessageComponent } from '../../../../../shared/components/message/message.component';
import { ConfirmationDeleteComponent } from '../../../../../shared/components/confirmation-delete/confirmation-delete.component';
import { ConfirmationService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { CarService } from '../../../../../deletefile/services/car.service';
import { TypeService } from '../../../../../shared/models/type-service.model';
import { TypeServiceFormComponent } from '../type-service-form/type-service-form.component';

@Component({
  selector: 'app-type-service',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    MessageComponent,
    ConfirmationDeleteComponent,
    TypeServiceFormComponent
  ],
  providers: [ConfirmationService],
  templateUrl: './type-service.component.html',
  styleUrl: './type-service.component.scss'
})
export class TypeServiceComponent implements OnInit, OnDestroy {
  typeServiceList: any[] = [];
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  modalVisible = false;
  typeService: TypeService | null = null;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getAllTypeSerivice();
  }

  getAllTypeSerivice() {
    this.carService.getCarType("service01").pipe(takeUntil(this.destroys$)).subscribe({
      next: (response) => {
        this.typeServiceList = response;
      },
      error: (err) => {
        this.messageComponent.showMessage('error', 'Erreur', 'Error lors de la récupération de liste de type serice');
      }
    })
  }

  addNewTypeService() {
    this.typeService = null;
    this.modalVisible = true;
  }

  updateTypeService(id: string) {

  }

  showConfirmation(id: string) {

  }

  handleDelete(id: string) {
    // this.empService.deleteCar(id).pipe(takeUntil(this.destroys$)).subscribe({
    //   next: () => {
    //     this.getAllEmploye();
    //     this.messageComponent.showMessage('success', 'Suppression réussie', "L'employé a été supprimé avec succès.");
    //   },
    //   error: (err) => {
    //     this.messageComponent.showMessage('error', 'Erreur', 'Error lors de la suppresion employée');
    //   }
    // })
  }

  handleReject() {
  }

  onTypeServiceCreated() {
    this.getAllTypeSerivice();
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
