import { Component } from '@angular/core';
import { FiltreButton } from '../../manager/message/service/service.service';
import { CarService, Commentaire } from '../landing/service/car.service';
import { ServiceService,Opinion,Opinionadd } from './service/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opinion',
  imports: [CommonModule,FormsModule],
  templateUrl: './opinion.component.html',
  styleUrl: './opinion.component.scss'
})
export class OpinionComponent {
  listecommentaire: Opinion[] = [];
  listecommentaireUsers: Opinion[] = [];

  usermessage: Opinionadd = {
    costumer: localStorage.getItem("iduser")??'',
    message: ' '
  }
  listefiltreButton: FiltreButton[] = [
    {class: 'px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium',
      index: 'all', name: 'Tous', rule: 'all'
    },
    {
    class: 'px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium',
    index:localStorage.getItem("iduser")??'',name:'Moi',rule:localStorage.getItem("iduser")??''}
  ]
  skip: number = 0;
  limit: number = 10;
  // affichage page 
  // liste des commentaire par pagination  (srcolle infinit)
  // fitrage
  // ajout de crud 
  constructor(private service: ServiceService) {
    this.init();
  }
  getTimeAgo(date: string | Date | null ): string {
    if (date == null) {
      return '';
    }
    const diff = Date.now() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'à l’instant';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} h`;
    const days = Math.floor(hours / 24);
    return `${days} j`;
  }
  filtreUserByrule(key: string) {
      this.service.getListe(key).subscribe(table=>
          {this.listecommentaire=table.data??[]; })
  }
  sendMessage() {
    this.service.add(this.usermessage).subscribe(table =>
    {
      this.init();
    });
  }
  deleteCom(id:string) {
    this.service.deleteValue(id).subscribe(table =>
    {
      this.init();
      console.log(table)
    });
  }
  init() {
    this.service.getListe('all').subscribe(table=>{
      this.listecommentaire = table.data ?? [];
     })
    this.service.getListe(localStorage.getItem("iduser")??'').subscribe(table=>{
      this.listecommentaireUsers = table.data ?? [];
     })
  }
}
