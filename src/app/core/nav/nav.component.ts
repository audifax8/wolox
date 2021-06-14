import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangName } from '../../enums';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public languages = [
    {
      name: LangName.SPANISH,
      value: 'LANGUAGES.ES'
    },
    {
      name: LangName.ENGLISH,
      value: 'LANGUAGES.EN'
    }
  ];

  constructor(
    public translateS: TranslateService
  ) { }

  public changeLang(lan: string) {
    this.translateS.use(lan);
  }

}
