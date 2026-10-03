import { Tab, TabContent, TabList, TabPanel, Tabs } from '@angular/aria/tabs';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TabList, Tab, Tabs, TabPanel, TabContent, TranslatePipe],
  selector: 'app-my-projects',
  styleUrl: './my-projects.scss',
  templateUrl: './my-projects.html',
})
export class MyProjects {}
