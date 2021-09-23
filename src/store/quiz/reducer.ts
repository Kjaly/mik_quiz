import {
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,

} from './actionTypes';

import { QuizActions, QuizState } from './types';

const initialState: QuizState = {
  pending: false,
  api: null,
  errors: null,
  message: null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: QuizActions): any => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload.quiz,
        errors: null,
      };
    case FETCH_QUIZ_FAILURE:
      return {
        ...state,
        pending: false,
        quiz: null,
        errors: action.payload.errors,
      };
    default:
      return {
        ...state,
      };
  }
};
