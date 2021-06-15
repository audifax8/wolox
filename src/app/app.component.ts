import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LangName } from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public readonly translateS: TranslateService
  ) {
  }

  ngOnInit() {
    this.translateS.addLangs([LangName.English, LangName.Spanish]);
    this.translateS.setDefaultLang(LangName.Spanish);
  }
}

