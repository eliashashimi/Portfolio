import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './layout/components/hero/hero';
import { MainContent } from './layout/components/main-content/main-content';

@Component({
  imports: [RouterOutlet, RouterLink, Header, Hero, MainContent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Portfolio');
}
