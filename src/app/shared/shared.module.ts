import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';

const MODULES = [
  CommonModule,
  ReactiveFormsModule
];

const COMPONENTS = [
  FilterButtonComponent,
  FormInputComponent
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
