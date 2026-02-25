import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productListComponent } from './productList.component';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Category } from './category.model';
@Component({
  selector: 'app-root',
  // imports: [productListComponent],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  imports: [productListComponent]
})
export class App {
  categories: any[] = [];
  selectedProducts: Product[] = [];
  constructor(private productService:ProductService){
    this.categories=this.productService.getCategories();
  }
  selectCategory(id: number) {
    this.selectedProducts = this.productService.getProductsByCategory(id);
  }

  protected readonly title = signal('online-store');
}
