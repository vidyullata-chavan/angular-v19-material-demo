import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/model';
import { ProductService } from '../../services/product.service';
import { SharedPrimeComponents } from '../../shared/shared-prime-components';

@Component({
  selector: 'app-prime-table',
  imports: [SharedPrimeComponents, CommonModule],
  templateUrl: './prime-table.component.html',
  styleUrl: './prime-table.component.scss',
  providers: [ProductService]
})
export class PrimeTableComponent implements OnInit {

    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}
