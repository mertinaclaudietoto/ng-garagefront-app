import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-menubar',
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    OverlayBadgeModule,
    PopoverModule
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  itemsde: MenuItem[] | undefined;
  @ViewChild('op') op!: Popover;
  selectedOption: any = null;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'A propos',
        icon: 'pi pi-home',
      },
      {
        label: 'Services',
        icon: 'pi pi-home',
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

  clickUser() {
    console.log("user");

  }

  settingOptions = [
    { name: 'Profil', icon: 'pi pi-user-edit' },
    { name: 'Déconnexion', icon: 'pi pi-sign-out' },
  ];

  toggle(event: Event) {
    this.op.toggle(event);
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.op.hide();
  }
}
