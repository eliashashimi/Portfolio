import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  refs = [
    {
      names: 'Sara Mara',
      project: 'references.project',
      proName: 'El Pollo Loco',
      text: 'references.ref1.text',
      urlLink: 'LinkedIn Profil',
    },
    {
      names: 'James Bond',
      project: 'references.project',
      proName: 'Join',
      text: 'references.ref2.text',
      urlLink: 'LinkedIn Profil',
    },
    {
      names: 'Eve Beef',
      project: 'references.project',
      proName: 'Pokedex',
      text: 'references.ref3.text',
      urlLink: 'LinkedIn Profil',
    },
  ];
}
