import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  template: `
  @if (isServerRunning) {
    <h5>
      Yes,the server is running
    </h5>}
  @else {
    <p>No, the server is not  running</p>
  }
  `,
  styleUrl: './app.css'
})
export class App {
  isServerRunning = true;
  protected readonly title = signal('Control_Flow_in_Components');
}
