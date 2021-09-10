import { CLOSE_MODAL, OPEN_MODAL } from "./actionTypes";

import { ModalActions, ModalState } from "./types";

const initialState: ModalState = {
  name: '',
  error: null,
  props: null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: ModalActions):any => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
       ...action.payload,
      };
    case CLOSE_MODAL:
      return {
       ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
