import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Emp } from '../../../shared/models/emp';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { EmpService } from '../../manager/emp/service/emp.service';
import { IdName } from '../../../shared/models/car-type';
import { CarService } from '../../../deletefile/services/car.service';
import { SelectModule } from 'primeng/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-compte',
  imports: [CommonModule,FormsModule,ImageModule,SelectModule],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.scss'
})
export class CompteComponent {
    dropdownItemsSex :IdName[]= [];
    value: Emp = new Emp();
    constructor(private empService: EmpService,private carService:CarService,private snackBar: MatSnackBar) {
        this.value.picture='';
    }
    ngOnInit() {
        this.carService.getCarType("sexs").subscribe(table=> {
          this.dropdownItemsSex = table?.map(value=>({name:value.name,_id:value._id}))
        });
        const id = localStorage.getItem("iduser") ?? '';
        if (id) {
            this.empService.getById(id).subscribe({
              next: (response) => {
                this.value = response.data ?? new Emp(); // ✅ Accès à la donnée réelle
                this.value.creditCard = this.value.creditCard == null ? { namecard: '', cardnumber: '', cvv: '', expiration: '' } :this.value.creditCard ;
              },
              error: (err) => {
                console.error('Erreur lors du chargement', err);
              }
            });
        }
    }
    modifOrAdd(carType:Emp){
        this.empService.modifOrAddCar(carType).subscribe( response => {
          this.snackBar.open(response.message, 'Fermer', {
              duration: 3000, 
              panelClass: ['snackbar-success'] 
          });
        },
        error => {
          console.error("❌ Erreur lors de l'envoi de la requête UPDATE Emp :", error);
        });
    }
   modifCardInformation(carType:Emp){
      this.empService.modifCardInformation(carType).subscribe( response => {
        this.snackBar.open(response.message, 'Fermer', {
            duration: 3000, 
            panelClass: ['snackbar-success'] 
        });
      },
      error => {
        console.error("❌ Erreur lors de l'envoi de la requête UPDATE Emp :", error);
      });
  }
   
  // ajout image 
     async onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","projet_mean_images");
        data.append("cloud_name","dcufspbrh");
        const res =await fetch("https://api.cloudinary.com/v1_1/dcufspbrh/image/upload",{
          method:'POST',
          body:data
        })
        const urlImage = await res.json();
        this.value.picture=urlImage.url;
        console.log(urlImage.url);
    }
    }
}
