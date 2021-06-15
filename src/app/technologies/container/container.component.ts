import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public filteredTechnologies$;
  public technologiesShownCount$;

  constructor(
    private readonly technologiesS: TechnologiesService
  ) { }

  ngOnInit(): void {
    this.filteredTechnologies$ = this.technologiesS.filteredTechnologies$;
    this.technologiesShownCount$ = this.technologiesS.technologiesShownCount$;
  }

  public onAddToFavorite(event): void {
    const { technology } = event;
    this.technologiesS.markAsFavorite(technology);
  }

}
