import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { OrdersComponent} from './orders.component';
import { OrdersRoutingModule} from './orders-routing.module';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    OrdersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [OrdersComponent]
})
export class OrdersModule { }
