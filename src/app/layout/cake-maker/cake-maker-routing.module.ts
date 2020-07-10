import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeMakerComponent} from './cake-maker.component';


const routes: Routes = [{
  path: '', component: CakeMakerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakeMakerRoutingModule { }
