import { RenderRoutes } from './RenderRoutes';
import {
  About,
  Home,
  Publications,
  PrivacyPolicy
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
    key: 'PUBLICATIONS',
    component: (): JSX.Element => <About/>,
  },
  {
    path: '/privacy',
    key: 'PUBLICATIONS',
    component: (): JSX.Element => <PrivacyPolicy/>,
  },
];

