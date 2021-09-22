import { CLOSE_ALERT, OPEN_ALERT } from "./actionTypes";
import { AlertPayload, TCloseAlert, TOpenAlert, } from "./types";


export const openAlertAction = (
  payload: AlertPayload
): TOpenAlert => ({
  type: OPEN_ALERT,
  payload,
});
export const closeAlertAction = (): TCloseAlert => ({
  type: CLOSE_ALERT,
});

export const alertsActions = {
  openAlertAction,
  closeAlertAction
}
