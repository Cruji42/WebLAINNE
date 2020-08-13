import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
<<<<<<< HEAD
import {ProfileComponent} from './profile/profile.component';
=======
import {LandingPageComponent} from '../landing-page/landing-page.component';
>>>>>>> 54321b0dcc76681e2170ca2f036a6b2b8c5eb4cd


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'cakemaker', pathMatch: 'prefix'},
    {path: 'cakemaker', loadChildren: () => import('./cakemaker/cakemaker.module').then(
        (m) => m.CakemakerModule
      )},
<<<<<<< HEAD
    {path: 'profile', loadChildren: () => import('./profile/profile.module').then(
        (m) => m.ProfileModule
      )},
    {path: 'about/order/profile', component: ProfileComponent},
=======
    { path: 'home', component: LandingPageComponent },
>>>>>>> 54321b0dcc76681e2170ca2f036a6b2b8c5eb4cd
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
