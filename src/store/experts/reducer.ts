import {
  FETCH_EXPERTS_FAILURE,
  FETCH_EXPERTS_REQUEST,
  FETCH_EXPERTS_SUCCESS,

} from './actionTypes';

import { ExpertsActions, ExpertsState } from './types';

const initialState: ExpertsState = {
  expertsList: [],
  pending: false,
  errors: null,
  message: null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: ExpertsActions): any => {
  switch (action.type) {
    case FETCH_EXPERTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EXPERTS_SUCCESS:
      return {
        ...state,
        pending: false,
        expertsList: [...action.payload.expertsList],
        errors: null,
      };
    case FETCH_EXPERTS_FAILURE:
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

