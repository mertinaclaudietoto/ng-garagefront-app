import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { MessageComponent } from '../../../../../shared/components/message/message.component';

@Component({
  selector: 'app-service-form',
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
  templateUrl: './service-form.component.html',
  styleUrl: './service-form.component.scss'
})
export class ServiceFormComponent {

}
