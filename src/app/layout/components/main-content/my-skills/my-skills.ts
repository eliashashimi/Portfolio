import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-my-skills',
  styleUrl: './my-skills.scss',
  templateUrl: './my-skills.html',
})
export class MySkills {}
