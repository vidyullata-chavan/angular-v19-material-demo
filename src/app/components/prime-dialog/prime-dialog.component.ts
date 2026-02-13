import { Component } from '@angular/core';
import { SharedPrimeComponents } from '../../shared/shared-prime-components';

@Component({
  selector: 'app-prime-dialog',
  imports: [SharedPrimeComponents],
  templateUrl: './prime-dialog.component.html',
  styleUrls: ['./prime-dialog.component.scss']
})
export class PrimeDialogComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
