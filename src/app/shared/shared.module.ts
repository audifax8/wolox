import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterButtonComponent } from './componets/filter-button/filter-button.component';

const MODULES = [
  CommonModule
];

const COMPONENTS = [
  FilterButtonComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
