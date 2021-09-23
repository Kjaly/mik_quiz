import { IRouterState } from './route/types';
import { IPublicationsState } from './publications/types';
import { ModalState } from './modals/types';
import { UserState } from './user/types';
import { AlertState } from './alerts/types';
import { QuizState } from "./quiz/types";
import { ExpertsState } from "./experts/types";

export interface AppState<R = IRouterState> {
  user: UserState,
  quiz: QuizState,
  experts: ExpertsState,
  modal: ModalState,
  alert: AlertState,
  publicationsList: IPublicationsState,
  router: R;
}
