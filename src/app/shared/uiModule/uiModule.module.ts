import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertModule } from './alert/alert.module';
import { InputModule } from './input/input.module';
import { FormItemModule } from './formItem/formItem.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AlertModule, InputModule, FormItemModule],
  exports: [AlertModule, InputModule, FormItemModule],
  providers: [],
})
export class UIModule {}
