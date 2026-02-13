import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { RulesService } from './../../services/rules.service';
import { PeriodicElement } from '../../models/model';

@Component({
  selector: 'app-rules-list',
  imports: [
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTableModule
  ],
  templateUrl: './rules-list.component.html',
  styleUrl: './rules-list.component.scss',
})
export class RulesListComponent {
  dataSource: PeriodicElement[] = [];
  // dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand', 'star'];
  expandedElement!: PeriodicElement | null;

  /** Checks whether an element is expanded. */
  isExpanded(element: PeriodicElement) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: PeriodicElement) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  constructor(private rulesService: RulesService) {}

  ngOnInit() {
    this.getRules();
    // this.getRulesFromBackend();
  }

  getRulesFromBackend() {
    this.rulesService.getRulesDataFromLocalBackend().subscribe((data) => {
      console.log('Rules from backend:', data);
    });
  }

  getRules() {
    this.rulesService.getAllElements().subscribe((data) => {
      this.dataSource = data.elements;
    });
  }

  openActionMenu(element: any) {
    console.log('Selected element:', element);
  }
  
}