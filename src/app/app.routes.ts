import { Routes } from '@angular/router';
import { MainContent } from './layout/components/main-content/main-content';
import { Impress } from './layout/components/impress/impress';

export const routes: Routes = [
  {
    path: '',
    component: MainContent,
  },
  {
    path: 'legal-notice',
    component: Impress,
  },
];
