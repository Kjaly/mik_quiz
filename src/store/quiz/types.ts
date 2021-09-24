import { LogoutUserSuccess } from "../user/types";
import {
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  SUBMIT_QUIZ_FAILURE,
  SUBMIT_QUIZ_REQUEST,
  SUBMIT_QUIZ_SUCCESS
} from "./actionTypes";


export interface IQuiz {
  quizId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type IOption = {
  id: number,
  text: string,
}

export interface IQuestion {
  id: number,
  quizz_id: number,
  question: string,
  type: number,
  options: Array<IOption>,
  created_at: string,
  updated_at: string,
  deleted_at: string | null
}

export interface IUserAnswer {
  id: number,
  user_id: number,
  quizz_id: number,
  answer: string | null,
  correct_answers: number,
  completed_at: string,
  created_at: string,
  updated_at: string,
  deleted_at: string | null
}

export interface QuizState {
  pending: boolean;
  errors: string | null;
  message: string | null;
  id: number | null,
  name: string,
  created_at: string,
  deleted_at: string,
  questions: Array<IQuestion> | null,
  user_answer: IUserAnswer | null,
}

export interface FetchQuizSuccessPayload {
  quiz: IQuiz;
}

export interface FetchQuizFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface SubmitQuizRequestPayload {
  id: number
  answers: Array<any>,
  essay?: string,
}

export interface FetchQuizSuccessPayload {
  quiz: IQuiz;

}

export interface SubmitQuizSuccessPayload {
  quiz: IQuiz;
}

export interface SubmitQuizFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchQuizRequest {
  type: typeof FETCH_QUIZ_REQUEST;
}

export type FetchQuizSuccess = {
  type: typeof FETCH_QUIZ_SUCCESS;
  payload: FetchQuizSuccessPayload;
};

export type FetchQuizFailure = {
  type: typeof FETCH_QUIZ_FAILURE;
  payload: FetchQuizFailurePayload;
};

export interface SubmitQuizRequest {
  type: typeof SUBMIT_QUIZ_REQUEST;
  payload: SubmitQuizRequestPayload
}

export type SubmitQuizSuccess = {
  type: typeof SUBMIT_QUIZ_SUCCESS;
};

export type SubmitQuizFailure = {
  type: typeof SUBMIT_QUIZ_FAILURE;
  payload: SubmitQuizFailurePayload;
};


export type QuizActions =
  | FetchQuizRequest
  | FetchQuizSuccess
  | FetchQuizFailure
  | SubmitQuizRequest
  | SubmitQuizSuccess
  | SubmitQuizFailure
  | LogoutUserSuccess
