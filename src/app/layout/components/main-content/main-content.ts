import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../../../shared/header/header';
import { Hero } from './hero/hero';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';

@Component({
  imports: [Header, Hero, MySkills, MyProjects],
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
