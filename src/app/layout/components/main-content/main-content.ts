import { Component } from '@angular/core';
import { Header } from '../../../shared/header/header';

import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { WhyMe } from './why-me/why-me';
import { Hero } from './hero/hero';
import { References } from './references/references';

@Component({
  imports: [Header, Hero, WhyMe, MySkills, MyProjects, References],
  selector: 'app-main-content',
  styleUrl: './main-content.scss',
  templateUrl: './main-content.html',
})
export class MainContent {}
