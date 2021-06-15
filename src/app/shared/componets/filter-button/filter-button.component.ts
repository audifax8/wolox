import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterButtonComponent {

  @Input() buttonLabel: string;
  @Input() buttonType: string;
  @Input() selected: string;
  @Output() buttonClick = new EventEmitter();

  public clickedButtonToogle: boolean;

  constructor() {
    this.clickedButtonToogle = false;
    // todo delete
  }

  public handleClick(): void {
    this.clickedButtonToogle = !this.clickedButtonToogle;
    this.buttonClick.emit({
      type: this.buttonType
    });
  }

  public isSelected(): boolean {
    return (this.selected === this.buttonType) ? true : false;
  }

}
