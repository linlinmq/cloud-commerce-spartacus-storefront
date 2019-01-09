import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRefDirective } from './css-ref.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CssRefDirective],
  exports: [CssRefDirective]
})
export class CssRefModule {}
