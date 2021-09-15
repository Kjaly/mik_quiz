import { RenderRoutes } from './RenderRoutes';
import {
  About,
  Home,
  Publications,
  PrivacyPolicy,
  Profile
} from '../pages';

export const ROUTES = [
  {path: '/', key: 'ROOT', exact: true, component: (): JSX.Element => <Home/>},
  {
    path: '/publications',
    key: 'PUBLICATIONS',
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
    component: (): JSX.Element => <Profile/>,
  },
  {
    path: '/quiz',
    key: 'QUIZ',
    component: (): JSX.Element => <About/>,
  },
];

