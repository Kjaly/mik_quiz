import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchQuizFailure, fetchQuizSuccess, } from './actions';
import { FETCH_QUIZ_REQUEST, } from './actionTypes';
import $api from '../../http';
import { QuizResponse } from "../../models/response/QuizResponse";


const fetchQuiz = (): Promise<AxiosResponse<QuizResponse>> =>
  $api.get<QuizResponse>(`${process.env.REACT_APP_API_URL}/quizzes`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });


function* fetchQuizSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchQuiz);
    yield put(
      fetchQuizSuccess({
        quiz: response.data.data,
      })
    );
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

}

export default quizSaga;
