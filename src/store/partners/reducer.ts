import {
  FETCH_PARTNERS_FAILURE,
  FETCH_PARTNERS_REQUEST,
  FETCH_PARTNERS_SUCCESS,

} from './actionTypes';

import { PartnersActions, PartnersState } from './types';

const initialState: PartnersState = {
  partnersList: [],
  pending: false,
  errors: null,
  message: null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: PartnersActions): any => {
  switch (action.type) {
    case FETCH_PARTNERS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PARTNERS_SUCCESS:
      return {
        ...state,
        pending: false,
        partnersList: [...action.payload.partnersList],
        errors: null,
      };
    case FETCH_PARTNERS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload.errors,
      };
    default:
      return {
        ...state,
      };
  }
};

