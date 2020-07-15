import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'cakemaker', pathMatch: 'prefix'},
    {path: 'cakemaker', loadChildren: () => import('./cakemaker/cakemaker.module').then(
        (m) => m.CakemakerModule
      )}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
