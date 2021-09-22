import {
  CLOSE_ALERT, OPEN_ALERT
} from "./actionTypes";


export interface AlertState {
  text: string;
  props: TAlertProps;
}

export interface AlertPayload {
  text: string;
  props?: any;
}

export interface TOpenAlert {
  type: typeof OPEN_ALERT;
  payload: AlertPayload;

}

export type TAlertProps = any;


export type TCloseAlert = {
  type: typeof CLOSE_ALERT;
};


export type AlertActions =
  | TOpenAlert
  | TCloseAlert;
