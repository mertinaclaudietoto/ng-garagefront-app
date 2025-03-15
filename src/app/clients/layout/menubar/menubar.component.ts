import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Popover, PopoverModule } from 'primeng/popover';
import { Chip } from 'primeng/chip';
import { RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { Tooltip } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  imports: [
    Menubar,
    BadgeModule,
    InputTextModule,
    Ripple,
    CommonModule,
    OverlayBadgeModule,
    PopoverModule,
    Chip,
    RouterModule,
    InputNumberModule,
    ButtonModule,
    Dialog,
    AvatarModule,
    Tooltip,
    DropdownModule
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  itemsde: MenuItem[] | undefined;
  @ViewChild('op') op!: Popover;
  cardMoneyvisible: boolean = false;
  settingOptions = [
    { name: 'Profil', icon: 'pi pi-user-edit' },
    { name: 'Déconnexion', icon: 'pi pi-sign-out' },
  ];
  operator: SelectItem[] = [];

  ngOnInit() {
    this.initilizeDataOption();
    this.initializeDataDepot();
  }

  toggle(event: Event) {
    this.op.toggle(event);
  }

  selectOption(option: any) {
    console.log("option selected", option);
    this.op.hide();
  }

  addMoney() {
    this.cardMoneyvisible = true;
  }

  initilizeDataOption() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        url: '/client'
      },
      {
        label: 'A propos',
        icon: 'pi pi-home',
        url: '/client/about'
      },
      {
        label: 'Travaux',
        icon: 'pi pi-search',
        badge: '2',
        items: [
          {
            label: 'Travaux',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            separator: true,
          },
          {
            label: 'Véhicules',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          }
        ],
      },
    ];
  }

  initializeDataDepot() {
    this.operator = [
      { label: 'Yas', value: { id: 1, name: 'Yas', code: '034' } },
      { label: 'Orange', value: { id: 2, name: 'Orange', code: '032' } },
      { label: 'Airtel', value: { id: 3, name: 'Airtel', code: '033' } }
    ];
  }
}
