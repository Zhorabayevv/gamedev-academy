import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IAlert, AlertType, IAlertOptions } from '../types/alert.interface';

@Injectable()
export class AlertService {
  private subject$: Subject<IAlert> = new Subject<IAlert>();
  private maxAlerts: number = 3;
  private alerts: IAlert[] = [];

  constructor() {}

  public onAlert(): Observable<IAlert> {
    return this.subject$.asObservable();
  }

  public success(message: string, autoCloseValue?: boolean): void {
    const autoClose = autoCloseValue === undefined ? true : autoCloseValue;

    this.alert({ autoClose, type: AlertType.Success, message });
  }

  public error(message: string, autoCloseValue?: boolean): void {
    const autoClose = autoCloseValue === undefined ? true : autoCloseValue;

    this.alert({ autoClose, type: AlertType.Error, message });
  }

  public warn(message: string, autoCloseValue?: boolean): void {
    const autoClose = autoCloseValue === undefined ? true : autoCloseValue;

    this.alert({ autoClose, type: AlertType.Warning, message });
  }

  private alert(alert: IAlert): void {
    alert.id = alert.id || this.generateID();

    if (alert.autoClose) {
      setTimeout(() => this.clear(alert.id), 15000);
    }

    if (this.alerts.length >= this.maxAlerts) {
      const oldestAlertId = this.alerts[0].id;

      this.clear(oldestAlertId);
    }

    this.alerts.push(alert);
    this.subject$.next(alert);
  }

  public clear(id: string): void {
    const index = this.alerts.findIndex((alert) => alert.id === id);

    if (index !== -1) {
      const removedAlert = this.alerts.splice(index, 1)[0];

      this.subject$.next({ ...removedAlert, message: undefined });
    }
  }

  private generateID(): string {
    return Math.random().toString(36).substr(2, 9) + new Date().getTime();
  }
}
