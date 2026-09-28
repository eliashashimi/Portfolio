import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-my-projects',
  styleUrl: './my-projects.scss',
  templateUrl: './my-projects.html',
})
export class MyProjects {
  list = [
    {
      name: 'DA Bubble',
      duration: 'Duration: 3 weeks',
      about: 'About the project',
      aboutText: '',
      organise: 'How I have organised my work process',
      organiseText: '',
      experience: 'My group work experience',
      experienceText: '',
      technologies: [
        'public/assets/images/Angular_Projects.png',
        'public/assets/images/TS_Projects.png',
        'public/assets/images/FireBase_Projects.png',
      ],
      image: '',
      urlTest: '',
      urlGit: '',
    },
    // {
    //   name: 'El Pollo Loco',
    //   duration: 'Duration: 5 weeks',
    //   about: 'About the project',
    //   aboutText: '',
    //   organise: 'How I have organised my work process',
    //   organiseText: '',
    //   experience: 'My group work experience',
    //   experienceText: '',
    //   technologies: [
    //     'public/assets/images/Html_Projects.png',
    //     'public/assets/images/JS_Projects.png',
    //     'public/assets/images/CSS_Projects.png',
    //   ],
    //   image: '',
    //   urlTest: '',
    //   urlGit: '',
    // },
    // {
    //   name: 'Join',
    //   duration: 'Duration: 2 months',
    //   about: 'About the project',
    //   aboutText: '',
    //   organise: 'How I have organised my work process',
    //   organiseText: '',
    //   experience: 'My group work experience',
    //   experienceText: '',
    //   technologies: [
    //     'public/assets/images/Html_Projects.png',
    //     'public/assets/images/JS_Projects.png',
    //     'public/assets/images/CSS_Projects.png',
    //   ],
    //   image: '',
    //   urlTest: '',
    //   urlGit: '',
    // },
  ];

  btnProject = '';
  ngOnInit() {
    this.btnProject = 'DA Bubble';
  }
}
