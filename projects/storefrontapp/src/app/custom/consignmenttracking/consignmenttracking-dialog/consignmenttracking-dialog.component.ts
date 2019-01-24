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
  shipDate;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  ngAfterViewChecked() {

  }

}
