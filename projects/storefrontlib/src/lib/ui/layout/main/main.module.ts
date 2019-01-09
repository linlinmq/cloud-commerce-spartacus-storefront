import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { HeaderModule } from './../header/header.module';
import { UiFrameworkModule } from '../../ui-framework/ui-framework.module';
import { CmsModule } from '../../../cms/cms.module';
import { GlobalMessageComponentModule } from '../../../global-message/global-message.module';
import { PwaModule } from './../../../pwa/pwa.module';
import { SiteContextModule } from '../../../site-context/site-context.module';
import { CssRefModule } from '../../../css-outlet/css-ref/css-ref.module';
import { OutletRefModule } from '../../../outlet/outlet-ref/outlet-ref.module';
import { LoginModule } from '../../../user/components/login/login.module';

import { StorefrontComponent } from './storefront.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    CmsModule,
    LoginModule,
    SiteContextModule,
    HeaderModule,
    UiFrameworkModule,
    OutletRefModule,
    CssRefModule,
    PwaModule
  ],
  declarations: [StorefrontComponent, FooterComponent],
  exports: [StorefrontComponent]
})
export class MainModule {}
