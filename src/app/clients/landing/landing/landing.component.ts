import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureswidgetComponent } from '../featureswidget/featureswidget.component';
import { FooterwidgetComponent } from '../footerwidget/footerwidget.component';
import { HerowidgetComponent } from '../herowidget/herowidget.component';
import { HighlightswidgetComponent } from '../highlightswidget/highlightswidget.component';
import { PricingwidgetComponent } from '../pricingwidget/pricingwidget.component';
import { TopbarComponent } from '../../../layout/topbar/topbar.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TopbarwidgetComponent } from "../topbarwidget/topbarwidget.component";
@Component({
  selector: 'app-landing',
  imports: [RouterModule, FeatureswidgetComponent, FooterwidgetComponent, HerowidgetComponent, HighlightswidgetComponent, PricingwidgetComponent, TopbarComponent, RippleModule, StyleClassModule, ButtonModule, DividerModule, TopbarwidgetComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
