import {
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  SUBMIT_QUIZ_FAILURE,
  SUBMIT_QUIZ_REQUEST,
  SUBMIT_QUIZ_SUCCESS,
} from './actionTypes';
import {
  FetchQuizFailure,
  FetchQuizRequest,
  FetchQuizSuccess,
  FetchQuizSuccessPayload,
  SubmitQuizFailure,
  SubmitQuizRequest,
  SubmitQuizRequestPayload,
  SubmitQuizSuccess
} from './types';

export const fetchQuizRequest = (): FetchQuizRequest => ({
  type: FETCH_QUIZ_REQUEST,
});

export const fetchQuizSuccess = (
  payload: FetchQuizSuccessPayload
): FetchQuizSuccess => ({
  type: FETCH_QUIZ_SUCCESS,
  payload,
});

export const fetchQuizFailure = (): FetchQuizFailure => ({
  type: FETCH_QUIZ_FAILURE,
});

export const submitQuizRequest = (payload: SubmitQuizRequestPayload): SubmitQuizRequest => ({
  type: SUBMIT_QUIZ_REQUEST,
  payload,
});

export const submitQuizSuccess = (): SubmitQuizSuccess => ({
  type: SUBMIT_QUIZ_SUCCESS,
});

export const submitQuizFailure = (): SubmitQuizFailure => ({
  type: SUBMIT_QUIZ_FAILURE,
});

