import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './component/input.component';
import { FormControlPipe } from 'src/app/shared/pipes/formControl.pipe';

@NgModule({
  declarations: [InputComponent, FormControlPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent],
  providers: [],
})
export class InputModule {}
