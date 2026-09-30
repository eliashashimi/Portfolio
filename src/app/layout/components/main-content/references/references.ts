import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  refs = [
    {
      names: 'Sara Mara',
      project: 'Project',
      proName: 'El Pollo Loco',
      text: '‘’Elias had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’',
      urlLink: 'LinkedIn Profil',
    },
    {
      names: 'James Bond',
      project: 'Project',
      proName: 'Join',
      text: '‘’Claudia is a reliable and friendly person. Works in a structured way and write a clear code. I recommend heras a colleague.’’',
      urlLink: 'LinkedIn Profil',
    },
    {
      names: 'Eve Beef',
      project: 'Project',
      proName: 'DA Bubble',
      text: '‘’ She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
      urlLink: 'LinkedIn Profil',
    },
  ];
}
