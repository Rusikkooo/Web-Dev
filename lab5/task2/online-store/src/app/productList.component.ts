import { Component, Input, signal } from "@angular/core";
import { Product } from "./product.model";
import { Category } from './category.model';
import { ProductService } from './product.service';
import { ProductItemComponent } from './productItem.component.js';

@Component({
    selector:'app-productList',
    standalone: true,
    styleUrls:['./productList.component.css'],
    templateUrl:'./productList.component.html',
    imports: [ProductItemComponent]
        
    
    
})

export class productListComponent{
    @Input() PRODUCTS : any;
    deleteProduct(id: number) {
        this.PRODUCTS = this.PRODUCTS.filter((p: Product) => p.id !== id);
    }

        shareToTelegram(product:any){
            const message = `Мынаны бір қарап жіберші:${product.name}\n Ссылка: ${product.link}`;
            const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${message}`;
            console.log(product);
            window.open(url, '_blank');
        }
        link(product:any){
            const linkValue = product.link;
            window.open(linkValue,'blank');
        }


//     categories: any[] = [];
//     selectedProducts: Product[] = [];

//     constructor(private productService: ProductService) {
//     // Категорияларды бірден жүктейміз
//     this.categories = this.productService.getCategories();
//     }

//   // Батырманы басқанда жұмыс істейді
//     selectCategory(id: number) {
//     this.selectedProducts = this.productService.getProductsByCategory(id);
//     }
    }