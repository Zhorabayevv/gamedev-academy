import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input('label') labelProps: string;
  @Input('value') valueProps: AbstractControl;

  constructor() {}

  onFocus(): void {}

  onBlur(): void {}
}
