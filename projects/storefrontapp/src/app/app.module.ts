import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StorefrontComponent, StorefrontModule } from '@spartacus/storefront';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ConsignmenttrackingModule } from './custom/consignmenttracking/consignmenttracking.module';

const devImports = [];

if (!environment.production) {
  devImports.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  imports: [
    ConsignmenttrackingModule,
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    StorefrontModule.withConfig({
      production: environment.production,
      server: {
        baseUrl: environment.occBaseUrl
      },
      pwa: {
        enabled: true,
        addToHomeScreen: true
      },
      routesConfig: {
        translations: {
          default: {
            product: {
              paths: ['product/:productCode', 'product/:name/:productCode']
            }
          }
        }
      }
    }),
    ...devImports
  ],

  bootstrap: [StorefrontComponent]
})
export class AppModule {}
