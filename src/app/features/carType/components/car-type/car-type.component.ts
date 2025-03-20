import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CarType } from '../../../../shared/models/carType.model';
import { ButtonModule } from 'primeng/button';
import { Subject, takeUntil } from 'rxjs';
import { CarTypeService } from '../../services/car-type.service';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-car-type',
  imports: [CommonModule, TableModule, ButtonModule, Dialog, InputTextModule, FormsModule, InputNumber],
  templateUrl: './car-type.component.html',
  styleUrl: './car-type.component.scss'
})
export class CarTypeComponent implements OnInit, OnDestroy {
  carTypeList: CarType[] = [];
  private destroys$ = new Subject<void>();
  visibleDialog: boolean = false;

  constructor(private cartTypeService: CarTypeService) { }
  ngOnInit(): void {
    this.getAllCarTypes();
  }

  submitForm() {

  }

  deleteCarType(id: string) {
    this.cartTypeService.deleteCarType(id).pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
        this.getAllCarTypes();
      },
      error: (err) => {
        console.error('Error delete car types:', err)
      }
    })
  }

  showDialog() {
    this.visibleDialog = true;
  }

  cancelDialog() {
    this.visibleDialog = false;
  }

  getAllCarTypes() {
    this.cartTypeService.getAllCartTypes().pipe(takeUntil(this.destroys$)).subscribe({
      next: (types) => {
        this.carTypeList = types;
      },
      error: (err) => {
        console.error('Error fetching car types:', err)
      }
    })
  }

  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
