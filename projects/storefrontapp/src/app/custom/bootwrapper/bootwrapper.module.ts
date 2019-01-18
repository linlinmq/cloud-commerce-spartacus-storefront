import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootwrapperComponent } from './bootwrapper.component';


@NgModule({
  declarations: [BootwrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [BootwrapperComponent]
})
export class BootwrapperModule { }
