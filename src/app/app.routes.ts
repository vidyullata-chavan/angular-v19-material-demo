import { Routes } from '@angular/router';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/app-dashboard/app-dashboard.component').then(
        (c) => c.AppDashboardComponent
      ),
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'layout-two',
    loadComponent: () =>
      import('./components/layout-two/layout-two.component').then(
        (c) => c.LayoutTwoComponent
      ),
    data: { breadcrumb: 'Layout Two' },
    children: [
      {
        path: 'prime-table',
        loadComponent: () =>
          import('./components/prime-table/prime-table.component').then(
            (c) => c.PrimeTableComponent
          ),
        data: { breadcrumb: 'Prime Table' },
      },
      {
        path: 'prime-dialog',
        loadComponent: () =>
          import('./components/prime-dialog/prime-dialog.component').then(
            (c) => c.PrimeDialogComponent
          ),
        data: { breadcrumb: 'Prime Dialog' },
      },
    ],
  },
  {
    path: 'layout-one',
    loadComponent: () =>
      import('./components/layout-one/layout-one.component').then(
        (c) => c.LayoutOneComponent
      ),
    data: { breadcrumb: 'Layout One' },
    children: [
      {
        path: 'material-table',
        loadComponent: () =>
          import('./components/rules-list/rules-list.component').then(
            (c) => c.RulesListComponent
          ),
        data: { breadcrumb: 'Material Table' },
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./components/tabs/tabs.component').then(
            (c) => c.TabsComponent
          ),
        data: { breadcrumb: 'Tabs' },
      },
      {
        path: 'grid-list',
        loadComponent: () =>
          import('./components/grid-list/grid-list.component').then(
            (c) => c.GridListComponent
          ),
        data: { breadcrumb: 'Grid List' },
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./components/buttons/buttons.component').then(
            (c) => c.ButtonsComponent
          ),
        data: { breadcrumb: 'Buttons' },
      },
      {
        path: 'form-fields',
        loadComponent: () =>
          import('./components/form-fields/form-fields.component').then(
            (c) => c.FormFieldsComponent
          ),
        data: { breadcrumb: 'Form Fields' },
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('./components/dropdown/dropdown.component').then(
            (c) => c.DropdownComponent
          ),
        data: { breadcrumb: 'Dropdown' },
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./components/accordion/accordion.component').then(
            (c) => c.AccordionComponent
          ),
        data: { breadcrumb: 'Accordion' },
      },
    ],
  },
  {
    path: '**',
    component: NoPageFoundComponent,
    pathMatch: 'full',
  },
];
