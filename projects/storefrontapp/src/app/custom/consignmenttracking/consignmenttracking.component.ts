import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RoutingService } from '@spartacus/core';
import { ConsignmenttrackingDialogComponent } from './consignmenttracking-dialog/consignmenttracking-dialog.component';
import { ConsignmenttrackingService } from './../consignmenttracking.service';



@Component({
  selector: 'cx-consignmenttracking',
  templateUrl: './consignmenttracking.component.html',
  styleUrls: ['./consignmenttracking.component.css']
})
export class ConsignmenttrackingComponent implements OnInit {


  @Input()
  consignment: any;

  modalInstance: any;
  consignmentTracking$: Observable<any>;
  orderCode: string;

  bindResult$: any;
  sendResult$: any;


  constructor(
    private modalService: NgbModal,
    private service: ConsignmenttrackingService,
    private routingService: RoutingService

  ) { }

  ngOnInit() {
    this.routingService
      .getRouterState()
      .pipe(map(routingData => routingData.state.params.orderCode))
      .subscribe(orderCode => this.orderCode = orderCode);
  }

  loadTracking() {
    this.modalInstance = this.modalService.open(ConsignmenttrackingDialogComponent, {
      centered: true,
      size: 'lg'
    }).componentInstance;
    this.modalInstance.consignmentTracking$ = this.service.getConsignmentTracking(this.orderCode, this.consignment.code);
    this.modalInstance.shipDate = this.consignment.statusDate;
  }

  sendVerificationCode() {
    this.sendResult$ = this.service.sendVerificationCode();
  }

  bindMobileNumber() {
    this.bindResult$ = this.service.bindMobileNumber();
  }

  get showButton(): boolean {
    return this.consignment.status === 'SHIPPED' || this.consignment.status === 'IN_TRANSIT' || this.consignment.status === 'DELIVERING'
      || this.consignment.status === 'DELIVERY_COMPLETED' || this.consignment.status === 'DELIVERY_REJECTED';
  }
}
