import { Component, Input, Output, EventEmitter, input, output, signal } from '@angular/core';
import { Product } from './product.model';
@Component({
    selector:'app-product-item',
    standalone:true,
    // template:`   
    //     <button [id]="delete" (click)="onDelete()">Delete</button>
    // `
    templateUrl:'./productItem.html'
})
export class ProductItemComponent{
    product = input.required<Product>();
    delete = output<number>();

    onDelete(){
        this.delete.emit(this.product().id)
    };
    likes=signal(0); 
    onLike() {
    this.likes.update((v: number) => v + 1); 
}
}