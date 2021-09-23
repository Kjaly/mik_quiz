import { createSelector } from 'reselect';

import { AppState } from '../store.types';

const getPending = (state: AppState) => state.quiz.pending;

const getQuiz = (state: AppState) => state.quiz;
const getQuizId = (state: AppState) => state.quiz.id;

const getErrors = (state: AppState) => state.quiz.errors;
const getMessage = (state: AppState) => state.quiz.message;

export const getQuizSelector = createSelector(getQuiz, (quiz) => quiz);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorsSelector = createSelector(getErrors, (error) => error);
export const getMessageSelector = createSelector(getMessage, (message) => message);
export const getQuizIdSelector = createSelector(getQuizId, (id) => id)

