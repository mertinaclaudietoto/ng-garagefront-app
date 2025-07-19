import { Component,AfterViewInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import ScrollReveal from 'scrollreveal';
// login
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import 
import { CarService, ensembleServiceCar ,Commentaire} from './service/car.service';



@Component({
  selector: 'app-landing',
  imports: [RouterModule,ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule,CommonModule , RippleModule, StyleClassModule, ButtonModule, DividerModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit{
    listeservice!:ensembleServiceCar[]
    listecommentaire!:Commentaire[]

    constructor(private carService: CarService) {
      
    }
    ngOnInit() {
       this.carService.getList(0,4).subscribe(table=>
       { this.listeservice = table.data ?? []; }
       )
       this.carService.getCommentaire(0,4).subscribe(table=>
            {this.listecommentaire=table.data??[]; })
    }
    ngAfterViewInit() {
        const navMenu = document.getElementById("nav-menu");
        const navLink = document.querySelectorAll(".nav-link");
        const hamburger = document.getElementById("hamburger");
      
        if (hamburger && navMenu) {
          hamburger.addEventListener("click", () => {
          navMenu.classList.toggle("left-[0]")
          hamburger.classList.toggle("ri-close-large-line")
          })
        }
        if (navMenu && hamburger) {
          navLink.forEach(link => {
              link.addEventListener("click", () => {
              navMenu.classList.toggle("left-[0]")
              hamburger.classList.toggle("ri-close-large-line")       
              })
          })
        }


    /*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
        const sr = ScrollReveal({
          origin: "top",
          distance: "60px",
          duration: 2500,
          delay: 300,
          reset: true,
      })
      sr.reveal('.home__data,.about__top,.popular__top,.review__top,.review__swiper,.footer__icon,.footer__content,.copy__rigth')
      sr.reveal('.home__image',{delay:500,scale:0.5})
      sr.reveal('.service__card,popular_card',{interval:100})
      sr.reveal('.about__leaf',{interval:1000,origin:"right"})
      sr.reveal('.about__item__1-content,.about__item__2-img',{interval:1000,origin:"right"})
      sr.reveal('.about__item__2-content,.about__item__1-img',{interval:1000,origin:"left"})
      sr.reveal('.review_leaf,.footer_floral', { interval: 1000, origin: "left" })
      
      this.setActiveLink();
    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.setActiveLink();
    }
    setActiveLink(): void {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      let current = 'home';

      sections.forEach((section: HTMLElement) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
          const id = section.getAttribute('id');
          if (id) current = id;
        }
      });

      navLinks.forEach((item) => {
        item.classList.remove('active');

        // Vérifie si le href contient l'id courant (ex: #services)
        if (item.getAttribute('href')?.includes(current)) {
          item.classList.add('active');
        }
      });
    }
}
