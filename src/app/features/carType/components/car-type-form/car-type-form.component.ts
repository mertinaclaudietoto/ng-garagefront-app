import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Subject, takeUntil } from 'rxjs';
import { CarTypeService } from '../../services/car-type.service';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { CarType } from '../../../../shared/models/carType.model';

@Component({
  selector: 'app-car-type-form',
  imports: [
    CommonModule,
    ButtonModule,
    Dialog,
    InputTextModule,
    FormsModule,
    InputNumber,
    ReactiveFormsModule,
    MessageComponent
  ],
  templateUrl: './car-type-form.component.html',
  styleUrl: './car-type-form.component.scss'
})
export class CarTypeFormComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @Input() visibleDialog: boolean = false;
  @Input() carType: CarType | null = null;
  @Output() visibleDialogChange = new EventEmitter<boolean>();
  @Output() carTypeCreated = new EventEmitter<void>()
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  carTypeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartTypeService: CarTypeService
  ) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  ngOnChanges(): void {
    if (this.carType) {
      this.carTypeForm.patchValue(this.carType);
    }
  }

  submitForm() {
    if (this.carType) {
      this.updateCarType();
    } else {
      this.createCarType();
    }
  }

  updateCarType() {
    this.cartTypeService.updateCarType(this.carType?._id!, this.getCarTypeData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
        this.messageComponent.showMessage('success', 'Mise à jour réussie', 'Le type de voiture a été mis à jour avec succès.');
        this.carType = null;
        this.visibleDialogChange.emit(false);
        this.carTypeCreated.emit();
      },
      error: (err) => {
        console.error('Error fetching car types:', err)
        this.messageComponent.showMessage('error', 'Erreur', "Echec lors de la mise à jour de type de voiture");
      }
    })
  }

  createCarType() {
    this.cartTypeService.saveCarType(this.getCarTypeData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
        this.messageComponent.showMessage('success', 'Enregistrement réussie', 'Le type de voiture a été enregsitré avec succès.');
        this.visibleDialogChange.emit(false);
        this.carTypeCreated.emit();
      },
      error: (err) => {
        console.error('Error fetching car types:', err)
        this.messageComponent.showMessage('error', 'Erreur', "Echec lors de l'enregistrement de type de voiture");
      }
    })
  }

  getCarTypeData(): Partial<CarType> {
    return {
      name: this.carTypeForm.get('name')?.value,
      percentage: this.carTypeForm.get('percentage')?.value
    }
  }

  initilizeForm() {
    this.carTypeForm = this.fb.group({
      name: new FormControl('', Validators.required),
      percentage: new FormControl(null, Validators.required)
    });
  }

  onHide() {
    this.carTypeForm.reset();
    this.visibleDialog = false;
    this.visibleDialogChange.emit(false);
  }

  cancelDialog() {
    this.carTypeForm.reset();
    this.visibleDialog = false;
    this.visibleDialogChange.emit(false);
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
