import { ServiceService } from './../../services/service.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Subject, takeUntil } from 'rxjs';
import { MessageComponent } from '../../../../shared/components/message/message.component';
import { Service } from '../../../../shared/models/service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-service',
  imports: [
    InputTextModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    ButtonModule,
    ImageModule,
    FileUploadModule,
    InputNumber,
    MessageComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './form-service.component.html',
  styleUrl: './form-service.component.scss'
})
export class FormServiceComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  serviceForm!: FormGroup;

  constructor(
    private serviceService: ServiceService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  submitForm() {
    this.createService();
  }
  createService() {
    this.serviceService.saveService(this.getServiceData()).pipe(takeUntil(this.destroys$)).subscribe({
      next: (service) => {
        this.messageComponent.showMessage('success', 'Enregistrement réussie', 'Le service a été enregsitré avec succès.');
        setTimeout(() => {
          this.router.navigate(['/services']);
        }, 1000)
        this.serviceForm.reset();
      },
      error: (err) => {
        console.error('Error create service:', err)
        this.messageComponent.showMessage('error', 'Erreur', "Echec lors de l'enregistrement de service");
      }
    })
  }

  getServiceData(): Partial<Service> {
    return {
      name: this.serviceForm.get('name')?.value,
      sizeTypePrice: this.serviceForm.get('sizeTypePrice')?.value,
      carTypePrice: this.serviceForm.get('carTypePrice')?.value,
      engineTypePrice: this.serviceForm.get('engineTypePrice')?.value,
      weigthTypePrice: this.serviceForm.get('weigthTypePrice')?.value,
    }
  }

  initilizeForm() {
    this.serviceForm = this.fb.group({
      name: new FormControl('', Validators.required),
      sizeTypePrice: new FormControl(null, Validators.required),
      carTypePrice: new FormControl(null, Validators.required),
      engineTypePrice: new FormControl(null, Validators.required),
      weigthTypePrice: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }

  cancelToList() {
    this.router.navigate(['/services']);
  }
}
