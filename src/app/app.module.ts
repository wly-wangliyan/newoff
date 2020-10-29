import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FooterComponent} from './footer/footer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatOptionModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { ParkingPlanComponent } from './parking-plan/parking-plan.component';
import { ServiceAdvantagesComponent } from './service-advantages/service-advantages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BusinessScopeComponent } from './parking-plan/business-scope/business-scope.component';
import { ProgrammeOverviewComponent } from './parking-plan/programme-overview/programme-overview.component';
import { CooperationCasesComponent } from './parking-plan/cooperation-cases/cooperation-cases.component';
import { CoreProductsComponent } from './parking-plan/core-products/core-products.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ParkingPlanComponent,
    ServiceAdvantagesComponent,
    AboutUsComponent,
    BusinessScopeComponent,
    ProgrammeOverviewComponent,
    CooperationCasesComponent,
    CoreProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatMenuModule
  ],
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
