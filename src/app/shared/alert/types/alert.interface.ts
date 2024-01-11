export class Alert {
  id?: string;
  type: AlertType;
  message: string;
  autoClose: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export interface IAlertOptions {
  id?: string;
  type: AlertType;
  message: string;
  autoClose: boolean;
}

export enum AlertType {
  Success,
  Error,
  Warning,
}
