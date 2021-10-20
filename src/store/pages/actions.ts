import { FETCH_PAGES_FAILURE, FETCH_PAGES_REQUEST, FETCH_PAGES_SUCCESS, } from './actionTypes';
import {
  FetchPagesFailure,
  FetchPagesRequestPayload,
  FetchPagesFailurePayload,
  FetchPagesRequest,
  FetchPagesSuccess,
  FetchPagesSuccessPayload
} from "./types";

export const fetchPagesRequest = (payload: FetchPagesRequestPayload): FetchPagesRequest => ({
  type: FETCH_PAGES_REQUEST,
  payload
});

export const fetchPagesSuccess = (
  payload: FetchPagesSuccessPayload
): FetchPagesSuccess => ({
  type: FETCH_PAGES_SUCCESS,
  payload,
});

export const fetchPagesFailure = (
  payload: FetchPagesFailurePayload
): FetchPagesFailure => ({
  type: FETCH_PAGES_FAILURE,
  payload,
});

