import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './adminPanel.component.html',
  styleUrls: ['./adminPanel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  inputValue: string = '';

  buttons: Record<string, string>[] = [
    {
      label: 'Ошибка',
      class: 'error',
    },
    {
      label: 'Предупреждение',
      class: 'warning',
    },
    {
      label: 'Успех',
      class: 'success',
    },
    {
      label: 'Сообщение',
      class: 'info',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
