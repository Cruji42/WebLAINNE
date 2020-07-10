import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'cakemaker', pathMatch: 'prefix'},
    {path: 'cakemaker', loadChildren: () => import('./cake-maker/cake-maker.module').then(
        (m) => m.CakeMakerModule
      )}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
