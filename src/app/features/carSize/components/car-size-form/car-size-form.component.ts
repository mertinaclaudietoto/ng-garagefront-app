import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CarSize } from '../../../../shared/models/carSize.model';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarSizeService } from '../../services/car-size.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-car-size-form',
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
  templateUrl: './car-size-form.component.html',
  styleUrl: './car-size-form.component.scss'
})
export class CarSizeFormComponent {
  private destroys$ = new Subject<void>();
  @Input() visibleDialog: boolean = false;
  @Input() carSize: CarSize | null = null;
  @Output() visibleDialogChange = new EventEmitter<boolean>();
  @Output() carSizeCreated = new EventEmitter<void>()
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  carSizeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartSizeService: CarSizeService
  ) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  ngOnChanges(): void {
    if (this.carSize) {
      this.carSizeForm.patchValue(this.carSize);
    }
  }

  submitForm() {
    if (this.carSize) {
      this.updateCarSize();
    } else {
      this.createCarSize();
    }
  }

  updateCarSize() {
    this.cartSizeService.updateCarSize(this.carSize?._id!, this.getCarSizeData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (sizes) => {
        this.messageComponent.showMessage('success', 'Mise à jour réussie', 'La taille de voiture a été mis à jour avec succès.');
        this.carSize = null;
        this.visibleDialogChange.emit(false);
        this.carSizeCreated.emit();
        this.carSizeForm.reset();
      },
      error: (err) => {
        console.error('Error fetching car sizes:', err)
        this.messageComponent.showMessage('error', 'Erreur', "Echec lors de la mise à jour du taille de voiture");
      }
    })
  }

  createCarSize() {
    this.cartSizeService.saveCarSize(this.getCarSizeData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (sizes) => {
        this.messageComponent.showMessage('success', 'Enregistrement réussie', 'La taille de voiture a été enregsitré avec succès.');
        this.visibleDialogChange.emit(false);
        this.carSizeCreated.emit();
        this.carSizeForm.reset();
      },
      error: (err) => {
        console.error('Error fetching car tailles:', err)
        this.messageComponent.showMessage('error', 'Erreur', "Echec lors de l'enregistrement du taille de voiture");
      }
    })
  }

  getCarSizeData(): Partial<CarSize> {
    return {
      name: this.carSizeForm.get('name')?.value,
      percentage: this.carSizeForm.get('percentage')?.value
    }
  }

  initilizeForm() {
    this.carSizeForm = this.fb.group({
      name: new FormControl('', Validators.required),
      percentage: new FormControl(null, Validators.required)
    });
  }

  onHide() {
    this.carSizeForm.reset();
    this.visibleDialog = false;
    this.visibleDialogChange.emit(false);
  }

  cancelDialog() {
    this.carSizeForm.reset();
    this.visibleDialog = false;
    this.visibleDialogChange.emit(false);
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
