import { NgModule } from '@angular/core';
import { OrderHistoryModule } from './order-history/order-history.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OutletModule } from '../../outlet/index';

@NgModule({
  imports: [OrderHistoryModule, OrderDetailsModule, OutletModule]
})
export class OrderModule {}
