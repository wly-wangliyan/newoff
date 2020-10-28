import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpwdComponent} from './forgotpwd/forgotpwd.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FooterComponent} from './footer/footer.component';
import {FootComponent} from './foot/foot.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatOptionModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FootComponent
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
