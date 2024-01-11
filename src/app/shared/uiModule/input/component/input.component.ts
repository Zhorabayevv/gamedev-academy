import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input('placeholder') placeholderProps: string;
  @Input('value') valueProps: AbstractControl;
  @Input('password') passwordProps: boolean = false;

  errorInput: boolean = false;
  successInput: boolean = false;
  inputType: string = 'text';

  constructor() {}

  ngOnInit(): void {
    this.inputType = this.passwordProps ? 'password' : 'text';
  }

  onBlur(): void {
    this.errorInput = this.valueProps.invalid && this.valueProps.touched;
    this.successInput = this.valueProps.valid && this.valueProps.touched;
  }

  togglePassword(): void {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
