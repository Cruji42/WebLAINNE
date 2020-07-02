import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FooterComponent} from './footer.component';
import { FooterRoutingModule} from './footer-routing.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    FooterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
