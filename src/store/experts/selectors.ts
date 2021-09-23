import { createSelector } from 'reselect';

import { AppState } from '../store.types';

const getPending = (state: AppState) => state.experts.pending;

const getExperts = (state: AppState) => state.experts.expertsList;

const getErrors = (state: AppState) => state.experts.errors;
const getMessage = (state: AppState) => state.experts.message;

export const getExpertsSelector = createSelector(getExperts, (experts) => experts);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorsSelector = createSelector(getErrors, (error) => error);
export const getMessageSelector = createSelector(getMessage, (message) => message);

