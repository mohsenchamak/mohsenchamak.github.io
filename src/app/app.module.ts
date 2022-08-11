import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpTokenInterceptor} from "./interceptors/http-token-interceptor.service";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./main/main.module";
import {JwtService} from "./core-services/jwt.service";
import {CanLoadMainSectionService} from "./core-services/can-load-main-section.service";
import {AuthGuardService} from "./core-services/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MainModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi   : true,
    },
    JwtService,
    CanLoadMainSectionService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
