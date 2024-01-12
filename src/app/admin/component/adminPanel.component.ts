import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/auth/types/loginResponse.interface';
import { AlertService } from 'src/app/shared/alert/services/alert.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './adminPanel.component.html',
  styleUrls: ['./adminPanel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  inputValue: string = '';
  userInfo: IUserInfo;
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

  constructor(private _alertService: AlertService) {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  onButtonClick(code: string): void {
    switch (code) {
      case 'error':
        this._alertService.error(this.inputValue);
        break;
      case 'info':
      case 'warning':
        this._alertService.warn(this.inputValue);
        break;
      case 'success':
        this._alertService.success(this.inputValue);
        break;
      default:
        break;
    }
  }
}
