import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forChild(routes),
  TranslateModule.forChild(),
  SharedModule
];

const COMPONENTS = [
  ContainerComponent
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
export class RegisterModule { }
