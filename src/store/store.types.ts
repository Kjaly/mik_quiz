import { IRouterState } from './route/types';
import { IPublicationsState } from './publications/types';
import { ModalState } from './modals/types';
import { UserState } from './user/types';

export interface AppState<R = IRouterState> {
  user:UserState,
  modal:ModalState,
  publicationsList:IPublicationsState,
  router: R;
}
