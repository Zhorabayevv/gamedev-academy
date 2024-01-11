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

  public onAlert(id: string = this.defaultId): Observable<Alert> {
    return this.subject
      .asObservable()
      .pipe(filter((alert) => alert && alert.id === id));
  }

  public success(message: string, options?: IAlertOptions): void {
    this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  public error(message: string, options?: IAlertOptions): void {
    this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  }

  public warn(message: string, options?: IAlertOptions): void {
    this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }

  private alert(alert: Alert): void {
    alert.id = alert.id || this.generateID();

    if (this.alerts.length >= this.maxAlerts) {
      this.clear(this.alerts[0].id);
    }

    console.log('alert', alert);

    this.alerts.push(alert);

    this.subject.next(alert);

    console.log('this.alerts', this.alerts);
    console.log('this.subject', this.subject);
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
