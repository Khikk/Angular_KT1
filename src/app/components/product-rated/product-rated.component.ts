import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-rated',
  standalone: true,
  imports: [],
  templateUrl: './product-rated.component.html',
  styleUrl: './product-rated.component.css'
})
export class ProductRatedComponent {
  @Input() public rating:number

  public computedStars():number{
    return Math.floor(this.rating)
  }
  public starTemplate = [1,2,3,4,5]
}
