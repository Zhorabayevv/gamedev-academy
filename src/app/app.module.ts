import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './shared/uiModule/alert/services/alert.service';
import { UIModule } from './shared/uiModule/uiModule.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UIModule],
  providers: [AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
