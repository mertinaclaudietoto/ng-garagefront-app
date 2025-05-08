import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { debounceTime, Subscription } from 'rxjs';
import { avarageTimeEmp, ServicesClientService } from '../../../../shared/services/services-client.service';
import { response } from 'express';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

export interface Datachart{
    _id:string,total:number
}
@Component({
    selector: 'app-chart-demo',
    standalone: true,
    imports: [ButtonModule,CommonModule,TableModule, ChartModule, FluidModule],
    templateUrl:'./stat.html'
})
export class Statistique {
    
    lineData: any;

    reservationM: any;
    reservationD: any;
    revenuM: any;
    revenuD: any;
    avarageTimeEmp!:avarageTimeEmp[];
    

  

    lineOptions: any;

  

    constructor(private ServiceCostumerService :ServicesClientService){}


    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        this.ServiceCostumerService.getAvarageTime().subscribe(
            response=>{
                this.avarageTimeEmp=response.data??[]
            }
        )
        this.ServiceCostumerService.getReservation("month").subscribe(
            response=>{
                const data=response.data??[]
                this.reservationM = {
                    labels: data!==null ?data.map(value=>value._id):[],
                    datasets: [
                        {
                            label: 'Reservation par mois',
                            backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                            borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                            data: data!==null ?data.map(value=>value.total):[],
                        }
                    ]
                };
            }
        )
        this.ServiceCostumerService.getReservation("day").subscribe(
            response=>{
                const data=response.data??[]
                this.reservationD = {
                    labels:  data!==null ?data.map(value=>value._id):[],
                    datasets: [
                        {
                            label: 'Reservation par mois',
                            backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                            borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                            data: data!==null ?data.map(value=>value.total):[],
                        }
                    ]
                };
            }
        )
        this.ServiceCostumerService.getRevenu("day").subscribe(
            response=>{
                const data=response.data??[]
                this.revenuD = {
                    labels: data!==null ?data.map(value=>value._id):[],
                    datasets: [
                        {
                            label: 'Revenu par jours',
                            backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                            borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                            data: data!==null ?data.map(value=>value.total):[],
                        }
                    ]
                };
            }
        )
        this.ServiceCostumerService.getRevenu("month").subscribe(
            response=>{
                const data=response.data??[]
                this.revenuM = {
                    labels: data!==null ?data.map(value=>value._id):[],
                    datasets: [
                        {
                            label: 'Revenu par mois',
                            backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                            borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                            data: data!==null ?data.map(value=>value.total):[],
                        }
                    ]
                };
            }
        )
        this.initCharts();
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        

        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                    tension: 0.4
                }
            ]
        };

        this.lineOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    // ngOnDestroy() {
    //     if (this.subscription) {
    //         this.subscription.unsubscribe();
    //     }
    // }
}
