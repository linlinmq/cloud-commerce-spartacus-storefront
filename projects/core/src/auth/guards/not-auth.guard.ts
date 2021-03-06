import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {
  static GUARD_NAME = 'NotAuthGuard';

  constructor(
    protected routingService: RoutingService,
    protected authService: AuthService
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUserToken().pipe(
      map(token => {
        if (token.access_token) {
          this.routingService.go({ cxRoute: 'home' });
        }
        return !token.access_token;
      })
    );
  }
}
