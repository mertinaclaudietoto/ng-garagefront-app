
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceCostumer } from '../../shared/models/servicesclient';


@Injectable({
  providedIn: 'root', 
})
export class ServiceviewService {
  private panierSubject = new BehaviorSubject<number>(
    (JSON.parse(localStorage.getItem('panierlist') || '[]') as any[]).length
  );

  // Getter pour accéder à la valeur actuelle du panier
  get panierCount$() {
    return this.panierSubject.asObservable();
  }

  // Méthode pour mettre à jour la longueur du panier
  updatePanierCount() {
    const panierList = JSON.parse(localStorage.getItem('panierlist') || '[]') as any[];
    this.panierSubject.next(panierList.length);
  }

  // Méthode pour ajouter un élément au panier
  addItemToPanier(item: ServiceCostumer) {
    localStorage.setItem('panier',JSON.stringify(item) );
    localStorage.setItem('panierlist',JSON.stringify(item.serviceList) );
    this.updatePanierCount(); // Met à jour la longueur après l'ajout
  }

  // Méthode pour supprimer un élément du panier
  removeItemFromPanier(itemId: string) {
    let panierList = JSON.parse(localStorage.getItem('panierlist') || '[]') as any[];
    panierList = panierList.filter(item => item.service.idservice._id+item.idcar !== itemId);
    localStorage.setItem('panierlist', JSON.stringify(panierList));
    this.updatePanierCount(); 
  }
}
