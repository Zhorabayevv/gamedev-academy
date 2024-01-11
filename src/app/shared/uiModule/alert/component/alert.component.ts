import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { Alert, AlertType } from '../types/alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input('id') idProps: string = 'default-alert';

  alerts: Alert[] = [];
  alertSubscription: Subscription;

  constructor(private _alertService: AlertService) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  // ngOnDestroy(): void {
  //   this.alertSubscription.unsubscribe();
  // }

  initializeListeners(): void {
    this.alertSubscription = this._alertService
      .onAlert(this.idProps)
      .subscribe((alert) => {
        console.log('alert', alert);

        this.alerts.push(alert);

        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 15000);
        }
      });
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;

    this.alerts = this.alerts.filter((x) => x !== alert);
  }

  cssClass(alert: Alert): string {
    if (!alert) return '';

    const classes = ['alert'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Warning]: 'alert-warning',
    };

    classes.push(alertTypeClass[alert.type]);

    return classes.join(' ');
  }
}
