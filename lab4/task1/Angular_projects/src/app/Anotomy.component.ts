import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:`./app.html`,
  styles:`
  :host{
    color: #a144eb;
    
  }`
})
export class App {
  protected readonly title = signal('Anotomy_of_a_Component');
}