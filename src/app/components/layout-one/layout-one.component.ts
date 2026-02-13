import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MenuItem } from 'primeng/api';
import {
  PageBreadcrumb,
  BreadcrumbService,
} from '../../services/breadcrumb.service';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'app-layout-one',
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
  templateUrl: './layout-one.component.html',
  styleUrl: './layout-one.component.scss',
})
export class LayoutOneComponent {
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
