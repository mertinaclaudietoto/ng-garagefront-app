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

  submitForm() {
    this.createCarType();

  }

  createCarType() {
    this.cartTypeService.saveCarType(this.getCarTypeData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
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
      _id: null,
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
