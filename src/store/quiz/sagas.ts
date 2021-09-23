import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchQuizFailure, fetchQuizSuccess, } from './actions';
import { FETCH_QUIZ_REQUEST, SUBMIT_QUIZ_REQUEST, } from './actionTypes';
import $api from '../../http';
import { QuizResponse } from "../../models/response/QuizResponse";
import { SubmitQuizRequest, SubmitQuizRequestPayload } from "./types";
import { Action } from "redux-actions";
import { history } from '../index'


const fetchQuiz = (): Promise<AxiosResponse<QuizResponse>> =>
  $api.get<QuizResponse>(`${process.env.REACT_APP_API_URL}/quizzes/1/start`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

const submitQuiz = (payload: SubmitQuizRequestPayload): Promise<AxiosResponse<QuizResponse>> =>
  $api.post<QuizResponse>(`${process.env.REACT_APP_API_URL}/quizes/${payload.id}/submit`, {
    answers: payload.answers,
    essay: payload.essay,
  });


function* fetchQuizSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchQuiz);
    if (response.data) {
      yield put(
        fetchQuizSuccess({
          quiz: response.data.data
        })
      );
    }

  } catch (e: any) {
    yield put(
      fetchQuizFailure({
        errors: e.response.data.errors,
      })
    );
  }
}

function* submitQuizSaga(action: Action<SubmitQuizRequest>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(submitQuiz, action.payload);
    yield put(
      fetchQuizSuccess({
        quiz: response.data.data,
      })
    );

    history.push('/')
  } catch (e: any) {
    yield put(
      fetchQuizFailure({
        errors: e.response.data.errors,
      })
    );
  }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* quizSaga(): any {
  yield all([takeLatest(FETCH_QUIZ_REQUEST, fetchQuizSaga)]);
  yield all([takeLatest(SUBMIT_QUIZ_REQUEST, submitQuizSaga)]);

}

export default quizSaga;
