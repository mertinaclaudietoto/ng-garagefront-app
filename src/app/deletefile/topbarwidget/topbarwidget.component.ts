import { Component ,AfterViewInit} from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbarwidget',
  imports: [StyleClassModule,RouterModule,RippleModule,ButtonModule],
  templateUrl: './topbarwidget.component.html',
  styleUrl: './topbarwidget.component.scss'
})
export class TopbarwidgetComponent implements AfterViewInit{
  constructor(public router: Router) { }
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
   

   
  }
}
