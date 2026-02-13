import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-footer',
  imports: [MatButtonModule, MatDividerModule, Menubar, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: '',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Layout One',
        icon: 'pi pi-desktop',
        routerLink: '/layout-one'
      },
      {
        label: 'Layout Two',
        icon: 'pi pi-desktop  ',
        routerLink: '/layout-two'
      },
      // {
      //   label: 'Projects',
      //   icon: 'pi pi-search',
      //   items: [
      //     {
      //       label: 'Components',
      //       icon: 'pi pi-bolt',
      //     },
      //     {
      //       label: 'Blocks',
      //       icon: 'pi pi-server',
      //     },
      //     {
      //       label: 'UI Kit',
      //       icon: 'pi pi-pencil',
      //     },
      //     {
      //       label: 'Templates',
      //       icon: 'pi pi-palette',
      //       items: [
      //         {
      //           label: 'Apollo',
      //           icon: 'pi pi-palette',
      //         },
      //         {
      //           label: 'Ultima',
      //           icon: 'pi pi-palette',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   label: 'Contact',
      //   icon: 'pi pi-envelope',
      // },
    ];
  }
}
