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
      name: LangName.Spanish,
      value: 'languages.es'
    },
    {
      name: LangName.English,
      value: 'languages.en'
    }
  ];

  constructor(
    public translateS: TranslateService
  ) { }

  public changeLang(lan: string) {
    this.translateS.use(lan);
  }

}
