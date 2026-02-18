import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`WELCOME TO THE {{city}},{{1+1}},{{2==2}}`,
  styleUrl: './app.css'
})
export class App {
  city = 'ALMATY';
}