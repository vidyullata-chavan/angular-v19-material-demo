import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'app-dashboard',
  imports: [
    OrganizationChartModule,
    CommonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './app-dashboard.component.html',
  styleUrl: './app-dashboard.component.scss',
})
export class AppDashboardComponent {
  data: TreeNode[] = [
    {
      label: 'Angular 19',
      styleClass: 'bg-pink-100 text-purple-900 border-purple-300',
      expanded: true,
      children: [
        {
          label: 'State Management',
          expanded: true,
          styleClass: 'bg-purple-100 text-purple-900 border-purple-300',
          children: [
            {
              label: 'NgRx',
              styleClass: 'bg-purple-100 text-purple-900 border-purple-300',
            },
            {
              label: 'RxJS',
              styleClass: 'bg-purple-100 text-purple-900 border-purple-300',
            },
          ],
        },
        {
          label: 'UI Component Libraries',
          expanded: true,
          styleClass: 'bg-purple-100 text-purple-900 border-purple-300',
          children: [
            {
          label: 'Angular Material',
          expanded: true,
          styleClass: 'bg-purple-100 text-purple-900 border-purple-300',
          data: [
            'Bottom Sheet',
            'Time Picker',
            'Grid List',
            'Sidenav',
            'Toolbar',
            'Card',
            'Tree',
          ],
        },
        {
          label: 'PrimeNG',
          expanded: true,
          styleClass: 'bg-purple-100 text-purple-900 border-purple-300',
          data: [
            'OrganizationChart',
            'Breadcrumb',
            'TreeTable',
            'Terminal',
            'Editor',
            'Table',
            'FileUpload',
            'Splitter',
          ],
        },
          ],
        },
        
      ],
    },
  ];
}
