import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLogedGuard } from './core/is-loged.guard';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    canActivate: [IsLogedGuard],
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'technologies',
    canActivate: [IsLogedGuard],
    loadChildren: () =>
      import('./technologies/technologies.module').then(m => m.TechnologiesModule)
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
