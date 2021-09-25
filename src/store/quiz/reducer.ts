import {
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  SUBMIT_QUIZ_FAILURE,
  SUBMIT_QUIZ_SUCCESS,
} from './actionTypes';

import { QuizActions, QuizState } from './types';
import { LOGOUT_USER_SUCCESS } from "../user/actionTypes";

const initialState: QuizState = {
  pending: false,
  errors: null,
  message: null,
  id: null,
  name: '',
  created_at: '',
  deleted_at: '',
  questions: null,
  user_answer: null,
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
      case LOGOUT_USER_SUCCESS:
      return {
       ...initialState
      };
    case SUBMIT_QUIZ_SUCCESS:
      return {
        ...initialState
      };
      case SUBMIT_QUIZ_FAILURE:
      return {
        ...initialState
      };
    default:
      return {
        ...state,
      };
  }
};
