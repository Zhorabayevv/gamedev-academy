import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputModule } from './input/input.module';
import { FormItemModule } from './formItem/formItem.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputModule, FormItemModule],
  exports: [InputModule, FormItemModule],
  providers: [],
})
export class UIModule {}
