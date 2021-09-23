import { FETCH_QUIZ_FAILURE, FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS, } from './actionTypes';
import {
  FetchQuizFailure,
  FetchQuizFailurePayload,
  FetchQuizRequest,
  FetchQuizSuccess,
  FetchQuizSuccessPayload
} from "./types";

export const fetchQuizRequest = (): FetchQuizRequest => ({
  type: FETCH_QUIZ_REQUEST,
});

export const fetchQuizSuccess = (
  payload: FetchQuizSuccessPayload
): FetchQuizSuccess => ({
  type: FETCH_QUIZ_SUCCESS,
  payload,
});

export const fetchQuizFailure = (
  payload: FetchQuizFailurePayload
): FetchQuizFailure => ({
  type: FETCH_QUIZ_FAILURE,
  payload,
});

