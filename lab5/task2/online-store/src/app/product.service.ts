import { Injectable } from '@angular/core';
import { PRODUCTS,CATEGORIES } from './products';

@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    getCategories(){
        return CATEGORIES;
    }
    getProductsByCategory(categoryid:number){
        return PRODUCTS.filter(p=>p.categoryid===categoryid)
    }
}