import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { TModalProps } from "./types";

const getModalName = (state: AppState): string => state.modal.name;


const getModalProps = createSelector<AppState, TModalProps, TModalProps>(
  (state) => state.modal.props,
  (modal) => modal,
);

export const modalsSelectors = {
  getModalName,
  getModalProps,
};
