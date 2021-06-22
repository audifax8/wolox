import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable
} from 'rxjs';

import {
  map
} from 'rxjs/operators';

import { ITechnology } from '../interfaces';

@Injectable()
export class TechnologiesService {

  private typeTechnologyFilter: BehaviorSubject<string> = new BehaviorSubject('');
  public typeTechnologyFilter$ = this.typeTechnologyFilter.asObservable();

  private nameTechnologyFilter: BehaviorSubject<string> = new BehaviorSubject('');
  public nameTechnologyFilter$ = this.nameTechnologyFilter.asObservable();

  private favoriteTechnologyFilter: BehaviorSubject<ITechnology> = new BehaviorSubject(null);
  public favoriteTechnologyFilter$ = this.favoriteTechnologyFilter.asObservable();

  private cachedTecnologies: Array<ITechnology> = [];

  /**
   * false = asc
   * true = desc
   */
  private orderFilter: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public orderFilter$ = this.orderFilter.asObservable();

  private allTechnologies: BehaviorSubject<Array<ITechnology>> = new BehaviorSubject(null);
  private allTechnologies$ = this.allTechnologies.asObservable();

  public withFavorite$ = combineLatest([
    this.allTechnologies$,
    this.favoriteTechnologyFilter$
  ]).pipe(
    map(([allTechnologies, updateFavorite]) => {
      if (!allTechnologies) return;
      const withFavorites = allTechnologies.map(technology => {
        if (updateFavorite && (technology.tech=== updateFavorite.tech)) {
          technology.favorite = updateFavorite.favorite;
        }
        return technology;
      });

      this.cachedTecnologies = withFavorites;
      return withFavorites;
    })
  );

  public filteredTechnologies$: Observable<Array<ITechnology>> = combineLatest(
    [
      this.withFavorite$,
      this.typeTechnologyFilter$,
      this.nameTechnologyFilter$,
      this.orderFilter$
    ]
  ).pipe(
    map(([allTechnologies, type, name, order]) => {
      let technologies = this.applyOrderFilter(allTechnologies, order) ;
      technologies = this.applyNameFilter(technologies, name);
      technologies = this.applyTypeFilter(technologies, type);
      return technologies;
    }),
  );

  public favoritesCount$ = combineLatest([
    this.withFavorite$
  ]).pipe(
    map(([filteredTechnologies]) => {
      if (!filteredTechnologies) return 0;
      return filteredTechnologies.reduce((acc, curr) => {
        acc = (curr.favorite) ? (acc + 1) : acc;
        return acc;
      }, 0)
    })
  );

  public technologiesShownCount$ = combineLatest([
    this.filteredTechnologies$
  ]).pipe(
    map(([filteredTechnologies]) => filteredTechnologies.length)
  );

  private applyOrderFilter(technologies: Array<ITechnology>, order: boolean): Array<ITechnology> {
    if (!technologies) return [];
    const sortedTechnologies = technologies.sort((tech1, tech2) => {
      if (order === null) {
        return 0;
      }
      const tech1Name = tech1.tech.toLocaleLowerCase();
      const tech2Name = tech2.tech.toLocaleLowerCase();
      if (order) {
        if(tech1Name < tech2Name) { return -1; }
        if(tech1Name > tech2Name) { return 1; }
      } else {
        if(tech1Name < tech2Name) { return 1; }
        if(tech1Name > tech2Name) { return -1; }
      }
      return 0;
    });
    return sortedTechnologies;
  }

  private applyNameFilter(technologies: Array<ITechnology>, name: string): Array<ITechnology> {
    const filteredTechnologies: Array<ITechnology> = technologies.filter(tech => {
      const technologyName = tech.tech.toLocaleLowerCase();
      const filterName = name.toLocaleLowerCase();

      if (filterName !== '') {
        const containsName = technologyName.includes(filterName);
        return (containsName) ? tech : undefined;
      }
      return tech;
    });
    return filteredTechnologies;
  }

  private applyTypeFilter(technologies: Array<ITechnology>, type: string): Array<ITechnology> {
    const filteredTechnologies: Array<ITechnology> = technologies.filter(tech => {
      if (type !== '') {
        const isTechnologyType = tech.type === type;
        return (isTechnologyType) ? tech : undefined;
      }
      return tech;
    });
    return filteredTechnologies;
  }


  constructor(
    private http: HttpClient
  ) {
    if(!this.cachedTecnologies.length) {
      this.http.get('https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs').subscribe((technologies: Array<ITechnology>) => {
        this.cachedTecnologies = technologies;
        this.allTechnologies.next(this.cachedTecnologies);
      });
    } else {
      this.allTechnologies.next(this.cachedTecnologies);
    }
  }

  public setDefaultFiltersValue(): void {
    this.orderFilter.next(null);
    this.typeTechnologyFilter.next('');
    this.nameTechnologyFilter.next('');
  }

  /**
   * filter works like a toogle
   */
  public setTechnologyType(type: string): void {
    const currentTypeFilter = this.typeTechnologyFilter.value;
    if (currentTypeFilter === type) {
      this.typeTechnologyFilter.next('');
    } else {
      this.typeTechnologyFilter.next(type);
    }
  }

  public toogleOrderFilter(): void {
    this.orderFilter.next(
      !this.orderFilter.value
    );
  }

  public updateNameFilter(newName: string): void {
    this.nameTechnologyFilter.next(newName);
  }

  public markAsFavorite(technology: ITechnology): void {
    this.favoriteTechnologyFilter.next(technology);
  }

}
