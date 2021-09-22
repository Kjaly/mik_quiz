import { IRouterState } from './route/types';
import { IPublicationsState } from './publications/types';
import { ModalState } from './modals/types';
import { UserState } from './user/types';
import { AlertState } from './alerts/types';

export interface AppState<R = IRouterState> {
  user:UserState,
  modal:ModalState,
  alert:AlertState,
  publicationsList:IPublicationsState,
  router: R;
}
