import { Component, OnInit, Input } from '@angular/core';
//import { Consignment } from 'projects/backend/occ-client/lib/models/mappers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

import { RoutingService } from '@spartacus/core';
import { ConsignmenttrackingDialogComponent } from './consignmenttracking-dialog/consignmenttracking-dialog.component';
import { ConsignmenttrackingService } from './../consignmenttracking.service';
//import { AddedToCartDialogComponent } from './../../../../../storefrontlib/src/lib/cart/add-to-cart/added-to-cart-dialog/added-to-cart-dialog.component';


@Component({
  selector: 'cx-consignmenttracking',
  templateUrl: './consignmenttracking.component.html',
  styleUrls: ['./consignmenttracking.component.css']
})
export class ConsignmenttrackingComponent implements OnInit {


  @Input() order;
  @Input() consignment;

  modalInstance;
  consignmentTracking$;
  orderCode: string;

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
  }

  // testTracking() {
  //   this.orderCode$.subscribe(
  //     orderCode => this.consignmentTracking$ = this.service.getConsignmentTracking(orderCode, this.consignment.code))
  //   //this.consignmentTracking$ = this.service.getConsignmentTracking(this.orderCode$, this.consignment.code);
  // }

}
