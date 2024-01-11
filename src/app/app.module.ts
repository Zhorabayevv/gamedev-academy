import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './shared/uiModule/alert/services/alert.service';
import { UIModule } from './shared/uiModule/uiModule.module';
// import { AuthInterceptor } from './shared/services/authinterceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, UIModule],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
    AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
