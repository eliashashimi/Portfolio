import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Portfolio');
  protected readonly titles = signal('ngx-translate-demo-standalone');
}
