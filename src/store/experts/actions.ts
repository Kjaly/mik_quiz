import { FETCH_EXPERTS_FAILURE, FETCH_EXPERTS_REQUEST, FETCH_EXPERTS_SUCCESS, } from './actionTypes';
import {
  FetchExpertsFailure,
  FetchExpertsFailurePayload,
  FetchExpertsRequest,
  FetchExpertsSuccess,
  FetchExpertsSuccessPayload
} from "./types";

export const fetchExpertsRequest = (): FetchExpertsRequest => ({
  type: FETCH_EXPERTS_REQUEST,
});

export const fetchExpertsSuccess = (
  payload: FetchExpertsSuccessPayload
): FetchExpertsSuccess => ({
  type: FETCH_EXPERTS_SUCCESS,
  payload,
});

export const fetchExpertsFailure = (
  payload: FetchExpertsFailurePayload
): FetchExpertsFailure => ({
  type: FETCH_EXPERTS_FAILURE,
  payload,
});

