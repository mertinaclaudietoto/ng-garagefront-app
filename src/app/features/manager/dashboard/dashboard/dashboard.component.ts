import { Component } from '@angular/core';
import { StatswidgetComponent } from "../statswidget/statswidget.component";
import { CommonModule } from '@angular/common';
import { ServiceClient } from '../../../../shared/models/servicesclient';
import { ServicesClientService } from '../../../../shared/service/services-client.service';
import { response } from 'express';
@Component({
  selector: 'app-dashboard',
  imports: [StatswidgetComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  nbrCostumer:number=0;
  nbrTacheencours:number=0;
  nbrTacheenAttent:number=0;
  nbrEmployeedispo:number=0;
  listClientEnAttent!:ServiceClient[];
  constructor(private serviceclientService :ServicesClientService){}

  ngOnInit() {
    this.serviceclientService.getWainting().subscribe(response=>{this.listClientEnAttent=response
      this.nbrTacheenAttent=response.length;
      console.log(response.length);
    },error =>{console.log(error)})
  }
}