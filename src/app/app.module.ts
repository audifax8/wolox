import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* NGX Translate */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TechnologiesService } from './technologies/technologies.service';

const MODULES = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  /* NGX Translate */
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  CoreModule,
  SharedModule
];

const COMPONENTS = [
  AppComponent
];

const SERVICES = [
  TechnologiesService
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [
    ...COMPONENTS
  ]
})
export class AppModule { }
