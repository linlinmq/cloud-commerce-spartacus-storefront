import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssOutletDirective } from './css-outlet.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CssOutletDirective],
  exports: [CssOutletDirective]
})
export class CssOutletModule {}
