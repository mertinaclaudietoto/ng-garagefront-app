import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { Emp } from '../../../shared/models/emp';
import { EmpService } from '../../costumers/services/emp.service';
import { CarService } from '../../costumers/services/car.service';
import { NgIf } from '@angular/common';
import { MessageComponent } from '../../../shared/components/message/message.component';
import { ConfirmationDeleteComponent } from '../../../shared/components/confirmation-delete/confirmation-delete.component';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp',
  imports: [
    FluidModule,
    ButtonModule,
    ImageModule,
    TableModule,
    NgIf,
    MessageComponent,
    ConfirmationDeleteComponent,
  ],
  providers: [ConfirmationService],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.scss'
})
export class EmpComponent implements OnInit, OnDestroy {
  empList: Emp[] | undefined = undefined;
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  modalVisible = false;


  constructor(
    private empService: EmpService,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEmploye();
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }


  getAllEmploye() {
    this.empService.getEmp().subscribe(table => this.empList = table);
  }

  handleDelete(id: string) {
    this.empService.deleteCar(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: () => {
        this.getAllEmploye();
        this.messageComponent.showMessage('success', 'Suppression réussie', "L'employé a été supprimé avec succès.");
      },
      error: (err) => {
        this.messageComponent.showMessage('error', 'Erreur', 'Error lors de la suppresion employée');
      }
    })
  }

  handleReject() {
  }

  showConfirmation(id: string) {
    this.confirmationDeleteComponent.show(id);
  }

  updateEmployee(id: string) {
    this.router.navigate(['/employee/edit', id]);
  }

  addNewEmployee() {
    this.router.navigate(['/employee/form']);
  }

}

