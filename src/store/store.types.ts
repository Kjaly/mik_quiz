import { IRouterState } from './route/types';
import { IPublicationOLDsState } from './publications/types';
import { ModalState } from './modals/types';
import { UserState } from './user/types';
import { AlertState } from './alerts/types';
import { QuizState } from "./quiz/types";
import { ExpertsState } from "./experts/types";
import { PartnersState } from "./partners/types";

export interface AppState<R = IRouterState> {
  user: UserState,
  quiz: QuizState,
  experts: ExpertsState,
  partners: PartnersState,
  modal: ModalState,
  alert: AlertState,
  publicationsList: IPublicationOLDsState,
  router: R;
}
