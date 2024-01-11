import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './component/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
  providers: [AlertService],
})
export class AlertModule {}
