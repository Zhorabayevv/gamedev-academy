import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './component/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
  providers: [AlertService],
})
export class AlertModule {}
