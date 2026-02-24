import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productListComponent } from './productList.component';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  imports: [productListComponent],
  templateUrl: './app.html',
  template:`
  <app-productList>
  </app-productList>
  `,
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
