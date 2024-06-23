import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public items:Array<any> = []
  public searchTitle:string = ''

  public categoryValues: Array<string> = []
  public activeCategory: string = ''

  public priceExtremes: Array<number> = []
  public averagePrice: number = 0
  
  public currentStarRating: number = 4

  public fetchProducts = async (): Promise<void> => {
    const apiURL = 'https://dummyjson.com/products?limit=50'
    const result = await axios(apiURL)
    this.items = result.data.products

    const categories = this.items.map(product => product.category)
    this.categoryValues = [...new Set(categories)]
    
    const prices = this.items.map(product => product.price)
    this.priceExtremes.push(Math.min(...prices), Math.max(...prices))
    this.averagePrice = Math.floor((this.priceExtremes[0] + this.priceExtremes[1]) / 2)
  }
  public getFilteredProducts = (): any[] => {
    const keyword = this.searchTitle.toLowerCase()
    return this.items.filter(product => 
      product.title.toLowerCase().includes(keyword) &&
      product.category.includes(this.activeCategory) &&
      product.price <= this.averagePrice &&
      Math.floor(product.rating) === this.currentStarRating
    )
  }
}
