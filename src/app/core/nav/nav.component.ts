import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TechnologiesService } from 'src/app/technologies/technologies.service';
import { LangName } from '../../enums';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

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

  public navRoutes = [
    {
      name: 'labels.login',
      route: 'login'
    },
    {
      name: 'labels.landing',
      route: 'landing'
    },
    {
      name: 'labels.benefits',
      route: 'https://www.wolox.com.ar/',
      target: '_blank'
    },
    {
      name: 'labels.technologies',
      route: 'technologies'
    },
    {
      name: 'labels.register',
      route: 'register'
    }
  ];

  public countFavTech$;

  constructor(
    public translateS: TranslateService,
    private technologiesS: TechnologiesService
  ) { }

  ngOnInit() {
    this.countFavTech$ = this.technologiesS.favoritesCount$;
  }

  public changeLang(lan: string) {
    this.translateS.use(lan);
  }

  public handleClick(navRoutes) {
    if (navRoutes.target) {
      window.open(navRoutes.route, navRoutes.target);
    }
  }

}
