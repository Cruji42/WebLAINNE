import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';



const routes: Routes = [{
   path: '', component: LandingPageComponent,
  children: [
    { path: 'landing', loadChildren: () => import('./landing-page/landing-page.component').then((m) => m.LandingPageComponent) },
    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) }
  ]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
