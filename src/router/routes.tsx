import { RenderRoutes } from './RenderRoutes';
import {
  About,
  Home,
  Publications,
  PrivacyPolicy,
  Profile,
  Quiz
} from '../pages';

export const ROUTES = [
  {path: '/', key: 'ROOT', exact: true, component: (): JSX.Element => <Home/>},
  {
    path: '/publications',
    key: 'PUBLICATIONS',
    auth: true,
    component: RenderRoutes,
    routes: [
      {
        path: '/publications',
        key: 'PUBLICATIONS_ROOT',
        exact: true,
        component: (): JSX.Element => <Publications/>,
      },
    ],
  },
  {
    path: '/about',
    key: 'ABOUT',
    component: (): JSX.Element => <About/>,
  },
  {
    path: '/privacy',
    key: 'PRIVACY',
    component: (): JSX.Element => <PrivacyPolicy/>,
  },
  {
    path: '/profile',
    key: 'PROFILE',
    auth: true,
    component: (): JSX.Element => <Profile/>,
  },
  {
    path: '/quiz',
    key: 'QUIZ',
    auth: true,
    component: (): JSX.Element => <Quiz/>,
  },
];

