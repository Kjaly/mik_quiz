import { CLOSE_ALERT, OPEN_ALERT } from "./actionTypes";

import { AlertActions, AlertState } from "./types";

const initialState: AlertState = {
  text:'',
  props: null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: AlertActions):any => {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        ...state,
       ...action.payload,
      };
    case CLOSE_ALERT:
      return {
       ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
