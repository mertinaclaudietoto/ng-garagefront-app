import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { MessageComponent } from '../../../shared/components/message/message.component';
import { ImageModule } from 'primeng/image';
import { Emp } from '../../../shared/models/emp';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EmpService } from '../../costumers/services/emp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CarService } from '../../costumers/services/car.service';
import { IdName } from '../../../shared/models/car-type';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SexService } from '../../../shared/services/sex.service';
import { IMAGESDEFAULTS } from '../../costumers/dataimage';

@Component({
  selector: 'app-employee-form',
  imports: [
    FluidModule,
    ImageModule,
    FormsModule,
    SelectModule,
    TableModule,
    ButtonModule,
    NgIf,
    FileUploadModule,
    DropdownModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    MessageComponent
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  employeId: string | null = null;
  addOrUpdateValue: Emp = new Emp();
  dropdownItems: any = [];
  dropdownItem = null;
  dropdownSex: any = [];
  ruleList: IdName[] | undefined = undefined;
  private routeSub!: Subscription;

  constructor(
    private empService: EmpService,
    private router: Router,
    private carService: CarService,
    private route: ActivatedRoute,
    private sexService: SexService
  ) {
    this.addOrUpdateValue.picture = IMAGESDEFAULTS["photo"];
    this.routeSub = this.route.params.subscribe(params => {
      this.employeId = params['id'];
      if (this.employeId) {
        this.getEmployeById(this.employeId!);
      }
    });
  }

  ngOnInit(): void {
    this.carService.getCarType("rules").subscribe(table => {
      this.ruleList = table;
      this.dropdownItems = table?.map(value => ({ name: value.name, _id: value._id }));
    })
    this.sexService.getAllSexe().subscribe(sexe => {
      this.dropdownSex = sexe?.map(value => ({ name: value.name, _id: value._id }));
    })
  }

  getEmployeById(id: string) {
    this.empService.getById(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: (employee) => {
        this.addOrUpdateValue = employee;
      },
      error: (err) => {
        this.messageComponent.showMessage('error', 'Erreur', "Error lors de la récupération de l'employée");
      }
    });
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  modifOrAdd(carType: Emp) {
    this.empService.modifOrAddCar(carType).subscribe(response => {
      this.messageComponent.showMessage('success', 'Modification réussie', "L'employé a été modifié avec succès.");
      setTimeout(() => {
        this.router.navigate(['/employee']);
      }, 1000)
    },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête POST OR UPDATE Emp :", error);
        this.messageComponent.showMessage('error', 'Erreur', "Error lors de la modification de cet employé");
      });
  }

  cancelToList() {
    this.router.navigate(['/employee']);
  }

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "projet_mean_images");
      data.append("cloud_name", "dcufspbrh");
      const res = await fetch("https://api.cloudinary.com/v1_1/dcufspbrh/image/upload", {
        method: 'POST',
        body: data
      })
      const urlImage = await res.json();
      this.addOrUpdateValue.picture = urlImage.url;
    }
  }
}
