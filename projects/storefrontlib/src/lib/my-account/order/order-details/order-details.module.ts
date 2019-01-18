import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details.component';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../ui/components/card/card.module';
import { OutletModule } from '../../../outlet/index';

@NgModule({
  imports: [CartSharedModule, CardModule, CommonModule, OutletModule],
  declarations: [OrderDetailsComponent],
  exports: [OrderDetailsComponent]
})
export class OrderDetailsModule {}
