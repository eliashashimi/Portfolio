import { Component } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  constructor(private translate: TranslateService) {}
  switchLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
  }
}
