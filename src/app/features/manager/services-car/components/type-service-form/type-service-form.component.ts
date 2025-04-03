import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageComponent } from '../../../../../shared/components/message/message.component';
import { Subject, takeUntil } from 'rxjs';
import { TypeService } from '../../../../../shared/models/type-service.model';
import { TypeServiceService } from '../../../../../shared/services/type-service/type-service.service';

@Component({
  selector: 'app-type-service-form',
  imports: [
    CommonModule,
    ButtonModule,
    Dialog,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MessageComponent
  ],
  templateUrl: './type-service-form.component.html',
  styleUrl: './type-service-form.component.scss'
})
export class TypeServiceFormComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @Input() visibleDialog: boolean = false;
  @Input() typeService: TypeService | null = null;
  @Output() visibleDialogChange = new EventEmitter<boolean>();
  @Output() carTypeServiceCreated = new EventEmitter<void>()
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  typeServiceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private typeServiceService: TypeServiceService
  ) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  ngOnChanges(): void {
    if (this.typeService) {
      this.typeServiceForm.patchValue(this.typeService);
    }
  }

  submitForm() {
    if (this.typeService) {
      this.updateCarSize();
    } else {
      this.createCarSize();
    }
  }

  updateCarSize() {
    // this.carService.updateCarSize(this.carSize?._id!, this.getCarSizeData()).pipe(takeUntil(this.destroys$)).subscribe({
    //   next: (sizes) => {
    //     this.messageComponent.showMessage('success', 'Mise à jour réussie', 'La taille de voiture a été mis à jour avec succès.');
    //     this.carSize = null;
    //     this.visibleDialogChange.emit(false);
    //     this.carSizeCreated.emit();
    //     this.carSizeForm.reset();
    //   },
    //   error: (err) => {
    //     console.error('Error fetching car sizes:', err)
    //     this.messageComponent.showMessage('error', 'Erreur', "Echec lors de la mise à jour du taille de voiture");
    //   }
    // })
  }

  createCarSize() {
    this.typeServiceService.saveTypeService(this.getCarSizeData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (sizes) => {
        this.messageComponent.showMessage('success', 'Enregistrement réussie', 'Type de service a été enregsitré avec succès.');
        this.visibleDialogChange.emit(false);
        this.carTypeServiceCreated.emit();
        this.typeServiceForm.reset();
      },
      error: (err) => {
        console.error('Error fetching car tailles:', err)
        this.messageComponent.showMessage('error', 'Erreur', "Echec lors de l'enregistrement du taille de voiture");
      }
    })
  }

  getCarSizeData(): Partial<TypeService> {
    return {
      name: this.typeServiceForm.get('name')?.value,
    }
  }

  initilizeForm() {
    this.typeServiceForm = this.fb.group({
      name: new FormControl('', Validators.required),
    });
  }

  onHide() {
    this.typeServiceForm.reset();
    this.visibleDialog = false;
    this.visibleDialogChange.emit(false);
  }

  cancelDialog() {
    this.typeServiceForm.reset();
    this.visibleDialog = false;
    this.visibleDialogChange.emit(false);
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
