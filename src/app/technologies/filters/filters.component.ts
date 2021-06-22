import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TechnologyType } from 'src/app/enums';
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public inputFilter = new FormControl('');

  public orderFilter$: Observable<boolean>;

  public buttonFilters = [
    {
      label: 'filters.mobile',
      type: TechnologyType.Mobile
    },
    {
      label: 'filters.front',
      type: TechnologyType.Front
    },
    {
      label: 'filters.back',
      type: TechnologyType.Back
    }
  ];

  public selectedFilterType: TechnologyType;

  constructor(
    private readonly technologiesS: TechnologiesService
  ) {
  }

  ngOnInit(): void {
    this.orderFilter$ = this.technologiesS.orderFilter$;
    this.onInputChange();
  }

  private onInputChange(): void {
    this.inputFilter.valueChanges.subscribe(val => {
      this.technologiesS.updateNameFilter(val);
    });
  }

  public onButtonClick(event): void {
    this.setTechnologyType(event.type);
    this.selectedFilterType = event.type;
  }

  public setTechnologyType(type: string): void {
    this.technologiesS.setTechnologyType(type);
  }

  public onOrderClick(): void {
    this.technologiesS.toogleOrderFilter();
  }


  public resetFilters(): void {
    this.inputFilter.setValue('');
    this.technologiesS.setDefaultFiltersValue();
    this.selectedFilterType = null;
  }
}
