import { createSelector } from "reselect";

import { AppState } from "../store.types";
import { TAlertProps } from "./types";

const getAlertText = (state: AppState): string => state.alert.text;


const getAlertProps = createSelector<AppState, TAlertProps, TAlertProps>(
  (state) => state.alert.props,
  (modal) => modal,
);

export const alertSelectors = {
  getAlertText,
  getAlertProps,
};
