import { createSelector } from "reselect";

import { AppState } from "../store.types";
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
