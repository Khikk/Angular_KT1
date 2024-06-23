import { Component, Input } from '@angular/core';
import { ProductRatedComponent } from '../product-rated/product-rated.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ProductRatedComponent],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productName: string;
  @Input() productCategory: string;
  @Input() productCost: number;
  @Input() productRated: number;
  @Input() productImage: string;
}

