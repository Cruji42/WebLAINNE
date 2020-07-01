
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
