import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CustomerSatisfaction } from '../../models/customerSatisfaction.model';
import { ModalDetailTaskComponent } from '../../../../../components/modal-detail-task/modal-detail-task.component';
import { Task } from '../../../task/models/task.model';
import { Knob } from 'primeng/knob';

@Component({
  selector: 'app-satisfaction',
  imports: [TableModule, ButtonModule, RatingModule, FormsModule, ModalDetailTaskComponent,Knob],
  templateUrl: './satisfaction.component.html',
  styleUrl: './satisfaction.component.scss'
})
export class SatisfactionComponent {
  listCustomerSatisfactions: CustomerSatisfaction[] = [];
  modalVisible = false;
  selectedTask!: Task;
  pourcentageNote: number = 43.7;

  constructor() {
    this.listCustomerSatisfactions = [
      {
        client: "Pierre",
        vehicule: "R01",
        reparation: "Transmission",
        note: 1
      },
      {
        client: "Sophie",
        vehicule: "R02",
        reparation: "Transmission",
        note: 3
      },
      {
        client: "Marie",
        vehicule: "R03",
        reparation: "Suspension",
        note: 1
      },
      {
        client: "Martin",
        vehicule: "R04",
        reparation: "Suspension",
        note: 5
      },
      {
        client: "Thomas",
        vehicule: "R05",
        reparation: "Suspension",
        note: 1
      },
      {
        client: "Pierre",
        vehicule: "R06",
        reparation: "Moteur",
        note: 3
      },
      {
        client: "Thomas",
        vehicule: "R07",
        reparation: "Électrique",
        note: 2
      },
      {
        client: "Pierre",
        vehicule: "R08",
        reparation: "Moteur",
        note: 2
      },
      {
        client: "Jean",
        vehicule: "R09",
        reparation: "Transmission",
        note: 3
      },
      {
        client: "Thomas",
        vehicule: "R010",
        reparation: "Électrique",
        note: 3
      },
      {
        client: "Sophie",
        vehicule: "R011",
        reparation: "Électrique",
        note: 5
      },
      {
        client: "Jean",
        vehicule: "R012",
        reparation: "Suspension",
        note: 3
      },
      {
        client: "Pierre",
        vehicule: "R013",
        reparation: "Moteur",
        note: 4
      },
      {
        client: "Pierre",
        vehicule: "R014",
        reparation: "Suspension",
        note: 4
      },
      {
        client: "Marie",
        vehicule: "R015",
        reparation: "Électrique",
        note: 4
      }
    ]
  }

  showModal(customerSatisfaction: CustomerSatisfaction) {
    this.selectedTask = {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5
    } as Task;
    this.modalVisible = true;
  }
}
