import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LayoutComponent} from './layout.component';
import { LayoutRoutingModule} from './layout-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ProfileComponent
  ],
  imports: [
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
