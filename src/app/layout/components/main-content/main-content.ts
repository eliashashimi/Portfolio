import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-main-content',
  styleUrl: './main-content.scss',
  templateUrl: './main-content.html',
})
export class MainContent {
  whyMe: string | null;
  private route = inject(ActivatedRoute);

  constructor() {
    this.whyMe = this.route.snapshot.paramMap.get('id');
  }
}
