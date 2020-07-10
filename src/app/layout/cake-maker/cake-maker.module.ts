import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CakeMakerComponent} from './cake-maker.component';
import { CakeMakerRoutingModule} from './cake-maker-routing.module';


@NgModule({
  declarations: [
    CakeMakerComponent
  ],
  imports: [
    CakeMakerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CakeMakerComponent]
})
export class CakeMakerModule { }
