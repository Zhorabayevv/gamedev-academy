import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType, IAlertOptions } from '../types/alert.interface';

@Injectable()
export class AlertService {
  private subject: Subject<Alert> = new Subject<Alert>();
  private defaultId: string = 'default-alert';
  private maxAlerts: number = 3;
  private alerts: Alert[] = [];

  constructor() {}

  public onAlert(id: string): Observable<Alert> {
    console.log('onAlert', this.subject);

    return this.subject
      .asObservable()
      .pipe(filter((alert) => alert && alert.id === id));
  }

  public success(message: string, options?: IAlertOptions): void {
    console.log('success', message);

    this.alert({ ...options, type: AlertType.Success, message });
  }

  public error(message: string, autoCloseValue?: boolean): void {
    console.log('error', message);

    const autoClose = autoCloseValue === undefined ? true : autoCloseValue;

    this.alert({ autoClose, type: AlertType.Error, message });
  }

  public warn(message: string, options?: IAlertOptions): void {
    this.alert({ ...options, type: AlertType.Warning, message });
  }

  private alert(alert: Alert): void {
    alert.id = alert.id || this.generateID();

    console.log('alert', alert);

    if (this.alerts.length >= this.maxAlerts) {
      this.clear(this.alerts[0].id);
    }

    this.alerts.push(alert);
    this.subject.next(alert);

    console.log('alerts', this.subject);
  }

  public clear(id: string = this.defaultId): void {
    const index = this.alerts.findIndex((alert) => alert.id === id);
    if (index !== -1) {
      const removedAlert = this.alerts.splice(index, 1)[0];

      this.subject.next(new Alert({ id: removedAlert.id }));
    }
  }

  private generateID(): string {
    return Math.random().toString(36).substr(2, 9) + new Date().getTime();
  }
}
