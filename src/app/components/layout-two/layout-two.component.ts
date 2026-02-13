import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { CommonModule } from '@angular/common';
import { BreadcrumbService, PageBreadcrumb } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-layout-two',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    Breadcrumb,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './layout-two.component.html',
  styleUrl: './layout-two.component.scss',
})
export class LayoutTwoComponent {
  home: MenuItem | undefined;

  breadcrumbs: PageBreadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.getBreadcrumbs().subscribe((bc: any) => {
      console.log(bc);
      this.breadcrumbs = bc;

    });
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
