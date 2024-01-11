import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIModule } from './shared/uiModule/uiModule.module';
import { AlertService } from './shared/alert/services/alert.service';
import { AlertModule } from './shared/alert/alert.module';
// import { AuthInterceptor } from './shared/services/authinterceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UIModule,
    AlertModule,
  ],
  providers: [
    AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
