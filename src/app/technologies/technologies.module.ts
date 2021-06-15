import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { FiltersComponent } from './filters/filters.component';
import { TechnologyCardComponent } from './technology-card/technology-card.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: ContainerComponent }
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  TranslateModule.forChild(),
  SharedModule
];

const COMPONENTS = [
  ContainerComponent,
  FiltersComponent,
  TechnologyCardComponent
];

const SERVICES = [
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class TechnologiesModule { }
