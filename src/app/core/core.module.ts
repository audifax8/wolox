import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const MODULES = [
  CommonModule,
  TranslateModule.forChild()
];

const COMPONENTS = [
  NavComponent,
  FooterComponent
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
export class CoreModule { }
