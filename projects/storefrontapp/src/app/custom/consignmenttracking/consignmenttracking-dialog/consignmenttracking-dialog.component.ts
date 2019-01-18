import {
  Component,
  OnInit,
  AfterViewChecked,
  ElementRef,
  ViewChild
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'cx-consignmenttracking-dialog',
  templateUrl: './consignmenttracking-dialog.component.html',
  styleUrls: ['./consignmenttracking-dialog.component.scss']
})
export class ConsignmenttrackingDialogComponent implements OnInit, AfterViewChecked {

  consignmentTracking$: Observable<any>;

  previousLoadedState;
  finishedLoading;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.consignmentTracking$.subscribe(res => {
    //   if (this.previousLoadedState !== res) {
    //     this.finishedLoading = this.previousLoadedState === false;
    //     this.previousLoadedState = res;
    //   }
    // });
  }

  ngAfterViewChecked() {
    // if (this.finishedLoading) {
    //   this.finishedLoading = false;
    //   const elementToFocus = this.dialog.nativeElement.querySelector(
    //     `[ngbAutofocus]`
    //   ) as HTMLElement;
    //   elementToFocus.focus();
    // }
  }

}
