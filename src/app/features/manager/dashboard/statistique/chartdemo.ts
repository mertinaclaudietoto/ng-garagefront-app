import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../../../../../template/sakai-ng-master/src/app/layout/service/layout.service';
import { ServicesClientService } from '../../../../shared/services/services-client.service';
import { response } from 'express';

export interface Revenu{
    _id:string,total:number
}
@Component({
    selector: 'app-chart-demo',
    standalone: true,
    imports: [CommonModule, ChartModule, FluidModule],
    templateUrl:'./stat.html'
})
export class Statistique {
    
    lineData: any;

    barDataDay: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;

    lineOptions: any;

    barOptions: any;

    pieOptions: any;

    polarOptions: any;

    radarOptions: any;
    dataMothRevenu:Revenu[]|null=null;
    dataDayRevenu:Revenu[]|null=null;

    constructor(private ServiceCostumerService :ServicesClientService){}


    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.ServiceCostumerService.getRevenu("month").subscribe(
            response=>{
                this.dataMothRevenu=response.data??[]
               
                
                this.barData = {
                    labels: this.dataMothRevenu!==null ?this.dataMothRevenu.map(value=>value._id):[],
                    datasets: [
                        {
                            label: 'Revenu par mois',
                            backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                            borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                            data: this.dataMothRevenu!==null ?this.dataMothRevenu.map(value=>value.total):[],
                        }
                    ]
                };
   
                this.barOptions = {
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
                                color: textColorSecondary,
                                font: {
                                    weight: 500
                                }
                            },
                            grid: {
                                display: false,
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
        )
        this.ServiceCostumerService.getRevenu("day").subscribe(
            response=>{
                this.dataDayRevenu=response.data??[]
                this.barDataDay = {
                    labels:  this.dataDayRevenu!==null ?this.dataDayRevenu.map(value=>value._id):[],
                    datasets: [
                        {
                            label: 'Revenu par mois',
                            backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                            borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                            data: this.dataDayRevenu!==null ?this.dataDayRevenu.map(value=>value.total):[],
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
        
        

        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--p-indigo-500'), documentStyle.getPropertyValue('--p-purple-500'), documentStyle.getPropertyValue('--p-teal-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--p-indigo-400'), documentStyle.getPropertyValue('--p-purple-400'), documentStyle.getPropertyValue('--p-teal-400')]
                }
            ]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

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

        this.polarData = {
            datasets: [
                {
                    data: [11, 16, 7, 3],
                    backgroundColor: [documentStyle.getPropertyValue('--p-indigo-500'), documentStyle.getPropertyValue('--p-purple-500'), documentStyle.getPropertyValue('--p-teal-500'), documentStyle.getPropertyValue('--p-orange-500')],
                    label: 'My dataset'
                }
            ],
            labels: ['Indigo', 'Purple', 'Teal', 'Orange']
        };

        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder,
                    },
                    ticks: {
                        display: false,
                        color: textColorSecondary
                    },
                },
            },
        };

        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    borderColor: documentStyle.getPropertyValue('--p-indigo-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-indigo-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-indigo-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-indigo-400'),
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    borderColor: documentStyle.getPropertyValue('--p-purple-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-purple-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        this.radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        color: textColor
                    },
                    grid: {
                        color: surfaceBorder
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
