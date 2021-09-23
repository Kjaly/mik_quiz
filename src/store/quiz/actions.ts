import {
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  SUBMIT_QUIZ_FAILURE, SUBMIT_QUIZ_REQUEST,
  SUBMIT_QUIZ_SUCCESS,
} from './actionTypes';
import {
  FetchQuizFailure,
  FetchQuizFailurePayload,
  FetchQuizRequest,
  FetchQuizSuccess,
  FetchQuizSuccessPayload,
  SubmitQuizFailure,
  SubmitQuizRequest,
  SubmitQuizRequestPayload,
  SubmitQuizSuccess,
  SubmitQuizSuccessPayload
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

export const submitQuizRequest = (payload:SubmitQuizRequestPayload): SubmitQuizRequest => ({
  type: SUBMIT_QUIZ_REQUEST,
  payload,
});

export const submitQuizSuccess = (
  payload: SubmitQuizSuccessPayload
): SubmitQuizSuccess => ({
  type: SUBMIT_QUIZ_SUCCESS,
  payload,
});

export const submitQuizFailure = (
  payload: FetchQuizFailurePayload
): SubmitQuizFailure => ({
  type: SUBMIT_QUIZ_FAILURE,
  payload,
});

