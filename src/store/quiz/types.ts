import { FETCH_QUIZ_FAILURE, FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS } from "./actionTypes";
import { IApi } from "../user/types";


export interface IQuiz {
  quizId: number;
  id: number;
  title: string;
  completed: boolean;
}




export interface IPhoto {
  alt: string,
  description: string,
  extension: string,
  hash: string,
  id: number,
  mime: string,
  name: string,
  original_name: string,
  url: string,
  quiz_id: number,
}

export interface QuizState extends Partial<IQuiz> {
  pending: boolean;
  api: IApi | null;
  created_at?: string,
  city?: string,
  deleted_at?: string,
  email?: string;
  email_verified_at?: string;
  birthday?: string;
  parental_agreement?: any;
  parental_agreement_id?: number;
  photo?: IPhoto | null;
  errors?: string | null;
  first_name?: string,
  id?: number,
  is_completed?: boolean,
  last_name?: string,
  message: string | null;
  middle_name?: string,
  name?: string,
  school?: string,
  school_class?: string,
  school_teacher_history?: string,
  updated_at?: string,
}

export interface FetchQuizSuccessPayload {
  quiz: IQuiz;
}



export interface FetchQuizFailurePayload {
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



export type QuizActions =
  | FetchQuizRequest
  | FetchQuizSuccess
  | FetchQuizFailure
  