export class IAlert {
  id?: string;
  type: AlertType;
  message: string;
  autoClose: boolean;
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
