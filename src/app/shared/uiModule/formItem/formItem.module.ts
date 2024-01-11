import { NgModule } from '@angular/core';
import { FormItemComponent } from './component/formItem.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [FormItemComponent],
  exports: [FormItemComponent],
  providers: [],
})
export class FormItemModule {}
