import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

import { RoutingService } from '@spartacus/core';
import { ConsignmenttrackingDialogComponent } from './consignmenttracking-dialog/consignmenttracking-dialog.component';
import { ConsignmenttrackingService } from './../consignmenttracking.service';



@Component({
  selector: 'cx-consignmenttracking',
  templateUrl: './consignmenttracking.component.html',
  styleUrls: ['./consignmenttracking.component.css']
})
export class ConsignmenttrackingComponent implements OnInit {


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
    this.modalInstance.shipDate = this.consignment.statusDate;
  }

}
