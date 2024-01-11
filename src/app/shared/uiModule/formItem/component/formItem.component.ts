import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './formItem.component.html',
  styleUrls: ['./formItem.component.scss'],
})
export class FormItemComponent {
  @Input('label') labelProps: string;
  @Input('required') requiredProps: boolean = false;
}
