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

  /**
   * false = asc
   * true = desc
   */
  private orderFilter: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public orderFilter$ = this.orderFilter.asObservable();

  private allTechnologies$ =
    this.http.get('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs') as Observable<Array<ITechnology>>;

  public withFavorite$ = combineLatest([
    this.allTechnologies$,
  ]).pipe(
    map(([allTechnologies]) => {
      return allTechnologies.map(technology => {
        technology.favorite = false;
        return technology;
      });
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
      let technologies = this.applyOrderFilter(allTechnologies, order);
      technologies = this.applyNameFilter(technologies, name);
      technologies = this.applyTypeFilter(technologies, type);
      return technologies;
    }),
  );

  private applyOrderFilter(technologies: Array<ITechnology>, order: boolean): Array<ITechnology> {
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
  ) { }

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

}
