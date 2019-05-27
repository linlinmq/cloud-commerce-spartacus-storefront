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

  public sendVerificationCode(): Observable<any> {

    const url = this.sendVerificationCodeUrl();
    // const params = new HttpParams({
    //   fromString: 'mobileNumber=13800000000'
    // });
    //const params = new HttpParams().set('mobileNumber', '13800000000');

    // return this.http
    //   .post<any>(url, { params: params })
    //   .pipe(catchError((error: any) => throwError(error)));

    return this.http
      .post(
        url,
        {},
        {
          params: { mobileNumber: '13800000000' }
        }
      )
      .pipe(catchError((error: any) => throwError(error)));

  }

  public bindMobileNumber(): Observable<any> {

    const url = this.bindMobileNumberUrl();
    // const params = new HttpParams({
    //   fromString: 'mobileNumber=13800000000&verificationCode=1234'
    // });
    // const params = new HttpParams().set('mobileNumber', '13800000000');
    // params.set('verificationCode', '1234');
    // return this.http
    //   .post<any>(url, { params: params })
    //   .pipe(catchError((error: any) => throwError(error)));

    return this.http
      .post(
        url,
        {},
        {
          params: { mobileNumber: '13800000000', verificationCode: '1234' }
        }
      )
      .pipe(catchError((error: any) => throwError(error)));

  }

  protected sendVerificationCodeUrl() {
    return (
      (this.config.server.baseUrl || '') +
      this.config.server.occPrefix +
      this.config.site.baseSite +
      '/users/current/mobilenumber/verificationcode'
    );
  }

  protected bindMobileNumberUrl() {
    return (
      (this.config.server.baseUrl || '') +
      this.config.server.occPrefix +
      this.config.site.baseSite +
      '/users/current/mobilenumber'
    );
  }



}
