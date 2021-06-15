import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITechnology } from 'src/app/interfaces';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyCardComponent {

  @Input() technology: ITechnology;
  @Output() addTofavorite = new EventEmitter();

  constructor() { }

  public addToFavorite() {
    const newTechnology = { ...this.technology, favorite: !this.technology.favorite};
    this.addTofavorite.emit({
      technology: newTechnology
    });
  }

}
