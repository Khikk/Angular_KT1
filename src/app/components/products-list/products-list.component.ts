import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent, NgFor],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productsService = inject(ProductsService);

  trackById(index: number, item: any): any {
    return item ? item : undefined;
  }

  ngOnInit(): void {
      this.productsService.fetchProducts();
  }
}
