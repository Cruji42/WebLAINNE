import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NavbarComponent} from './navbar.component';
import { NavbarRoutingModule} from './navbar-routing.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    NavbarRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }
