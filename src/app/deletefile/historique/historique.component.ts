import { CommonModule } from '@angular/common';
import { PanierviewService } from '../panierview/service/panierview.service';
import { Component, NgModule } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormGroup, FormsModule,NgModel,Validators } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
// import 
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { FormatnumberpipePipe } from '../../shared/pipe/formatnumber/formatnumberpipe.pipe';
import { ServiceCostumer } from '../../shared/models/servicesclient';
export interface PaymentInfo {
  name: string;        
  numbercard: number;  
  expiry: string;      
  cvv: number;        
}

@Component({
  selector: 'app-historique',
  imports: [FormatnumberpipePipe,InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule, IconFieldModule, InputIconModule, ToolbarModule, SplitButtonModule, TableModule,DialogModule,PaginatorModule,CommonModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss'
})
export class HistoriqueComponent {
  servicelist:ServiceCostumer[]|undefined=undefined;
  modifivalue!:ServiceCostumer|null;
  index:number=0;
  display: boolean = false;
  displaypaiement:boolean=false;
  rowIndex:string='';
  first: number = 0;
  rows: number = 10;
  infopayement:PaymentInfo={
    name:'',
    numbercard:0,
    expiry:'',
    cvv:0,
  }
  
  constructor(private  readonly panier :PanierviewService) {}
  ngOnInit() {
    const userId = localStorage.getItem('iduser');
    this.panier.gethistorique(userId,this.first,this.rows).subscribe(response=>
      this.servicelist =response.data??[]
    );
  }
  close() {
    this.display = false;
    this.panier.update(this.modifivalue).subscribe(response=>console.log(response));
    this.modifivalue=null;
    this.index=0;
  }
  closeInvoice() {
    if(this.modifivalue){
      this.modifivalue.etats=10;
      this.panier.updateFacture(this.modifivalue).subscribe(response=>console.log(response));
      this.displaypaiement = false;
    }
  }
  open(modifivalue:ServiceCostumer,index:number) {
    this.modifivalue=modifivalue;
    this.index=index;
    this.display = true;
  }
  openInvoice(modifivalue:ServiceCostumer) {
    console.log("valierere");
    this.modifivalue=modifivalue;
    this.displaypaiement = true;
  }
  onPageChange(event: PaginatorState) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? 10;
  }
  savePanier(){
    if (typeof localStorage !== 'undefined') {
      this.panier.savePanier(JSON.parse(localStorage.getItem('panier') || '[]'))
      .subscribe(response=>{
        localStorage.removeItem("panier")
        localStorage.removeItem("panierList") 
        this.servicelist =[]});
    }
  }
  getTotalInvoice():number{
    if(this.modifivalue!=null){
      return this.modifivalue.serviceList.reduce((acc, row) => acc + (row.service?.price ?? 0), 0);
    }
    return 0;
  }
  getColorInvoinceButon(etat:number){
    if(etat==10){
      return "secondary";
    }
    return "success";
  }
  getColorInvoinceFunct(modifivalue:ServiceCostumer){
    this.openInvoice(modifivalue);
    // if(modifivalue.etats!=10){
       
    // }
  }
  
}
