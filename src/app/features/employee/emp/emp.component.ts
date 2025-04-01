import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { Emp } from '../../../shared/models/emp';
import { EmpService } from '../../costumers/services/emp.service';
import { IdName } from '../../../shared/models/car-type';
import { CarService } from '../../costumers/services/car.service';
import { IMAGESDEFAULTS } from '../../costumers/dataimage';
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
  // serviceList: IdName[] | undefined = undefined;
  // ruleList: IdName[] | undefined = undefined;
  // display: boolean = false;

  // addOrUpdateValue: Emp = new Emp();
  // deleteValue: Emp = new Emp();
  // dropdownItems: any = [];
  // dropdownItem = null;
  private destroys$ = new Subject<void>();
  @ViewChild(MessageComponent) messageComponent!: MessageComponent;
  @ViewChild(ConfirmationDeleteComponent) confirmationDeleteComponent!: ConfirmationDeleteComponent;
  modalVisible = false;


  constructor(
    private empService: EmpService,
    private carService: CarService,
    private router: Router
  ) {
    // this.addOrUpdateValue.picture = IMAGESDEFAULTS["photo"];
  }

  ngOnInit() {
    this.getAllEmploye();
    // this.carService.getCarType("services").subscribe(table => this.serviceList = table);
    // this.carService.getCarType("rules").subscribe(table => {
    //   this.ruleList = table;
    //   this.dropdownItems = table?.map(value => ({ name: value.name, _id: value._id }));
    //   console.log(this.dropdownItems);
    // })
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

  // setUpdateValue(carType: Emp) {
  //   this.addOrUpdateValue = carType;
  // }


  // modifOrAdd(carType: Emp) {
  //   this.empService.modifOrAddCar(carType).subscribe(response => {
  //     console.log(response);
  //     this.relaod();
  //   },
  //     error => {
  //       console.error("❌ Erreur lors de l'envoi de la requête POST OR UPDATE Emp :", error);
  //     });
  // }


  // open(value: Emp) {
  //   this.deleteValue = value;
  //   this.display = true;
  // }
  // relaod() {
  //   this.empService.getEmp().subscribe(table => this.empList = table);
  //   this.deleteValue = new Emp();
  //   this.addOrUpdateValue = new Emp();
  // }
  // 
  // hasService(service: IdName): boolean | undefined {
  //   return this.addOrUpdateValue.skills?.some(s => s._id === service._id);
  // }
  // selectType($event: Event, type: IdName) {
  //   const isChecked = ($event.target as HTMLInputElement).checked;
  //   if (isChecked) {
  //     this.addOrUpdateValue.skills.push(type);
  //   } else {
  //     this.addOrUpdateValue.skills = this.addOrUpdateValue.skills.filter(type1 => type1._id != type._id)
  //   }
  // }
  // checkboxValue: any[] = [];

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
      // this.addOrUpdateValue.picture = urlImage.url;
      console.log(urlImage.url);
    }
  }


}

