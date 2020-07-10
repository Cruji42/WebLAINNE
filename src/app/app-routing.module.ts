import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { AuthGuard} from './shared/guard';


const routes: Routes = [
  {path: 'ordenar', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
