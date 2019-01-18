import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsignmenttrackingComponent } from './consignmenttracking.component';
import { ConsignmenttrackingDialogComponent } from './consignmenttracking-dialog/consignmenttracking-dialog.component';
import { SpinnerModule } from './../../../../../storefrontlib/src/lib/ui/components/spinner/spinner.module';


@NgModule({
  declarations: [ConsignmenttrackingComponent, ConsignmenttrackingDialogComponent],
  imports: [
    SpinnerModule,
    CommonModule
  ],
  exports: [ConsignmenttrackingComponent],
  entryComponents: [ConsignmenttrackingDialogComponent]
})
export class ConsignmenttrackingModule { }
