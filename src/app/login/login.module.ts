import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ContainerComponent } from './container/container.component';

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
  ContainerComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ]
})
export class LoginModule { }
