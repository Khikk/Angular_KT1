import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})

export class FormDataComponent {
  public productsService = inject(ProductsService);

  trackCategory(index: number, item: any): any {
    return item ? item : undefined;
  }
}
