import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { CatalogComponent} from './catalog/catalog.component';
import { AboutComponent} from './about/about.component';
import { AuthGuard} from './shared/guard';


const routes: Routes = [
  { path: 'order', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutComponent},
  { path: '', component: LandingPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
