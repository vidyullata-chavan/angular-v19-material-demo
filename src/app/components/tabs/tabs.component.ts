import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  imports: [MatTabsModule, MatIconModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
}
