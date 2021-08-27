import { CLOSE_MODAL, OPEN_MODAL } from "./actionTypes";

import { ModalActions, ModalState } from "./types";

const initialState: ModalState = {
  name: '',
  error: null,
  props: null,
};

export default (state = initialState, action: ModalActions) => {
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action);
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
