import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { OccConfig } from '@spartacus/core';

const BASIC_PARAMS =
  'DEFAULT';

@Injectable({
  providedIn: 'root'
})
export class ConsignmenttrackingService {

  constructor(protected http: HttpClient, protected config: OccConfig) { }

  protected getEndpoint(orderCode: string, consignmentCode: string) {
    const endpoint = 'orders/' + orderCode + '/consignments/' + consignmentCode;
    return (
      (this.config.server.baseUrl || '') +
      this.config.server.occPrefix +
      this.config.site.baseSite +
      '/' +
      endpoint
    );
  }

  public getConsignmentTracking(
    orderCode: string,
    consignmentCode: string
  ): Observable<any> {

    const url = this.getEndpoint(orderCode, consignmentCode);
    const params = new HttpParams({
      fromString: 'fields=' + BASIC_PARAMS
    });


    return this.http
      .get<any>(url, { params: params })
      .pipe(catchError((error: any) => throwError(error)));

  }



}
