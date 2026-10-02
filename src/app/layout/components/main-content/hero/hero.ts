import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private scroller = inject(ViewportScroller);
  scrollTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }
}
