import { RenderRoutes } from './RenderRoutes';
import {
  About, Home,
  Publications
} from '../pages';

export const ROUTES = [
  {path: '/', key: 'ROOT', exact: true, component: () => <Home/>},
  {
    path: '/publications',
    key: 'PUBLICATIONS',
    component: RenderRoutes,
    routes: [
      {
        path: '/publications',
        key: 'PUBLICATIONS_ROOT',
        exact: true,
        component: () => <Publications/>,
      },
    ],
  },
  {
    path: '/about',
    key: 'PUBLICATIONS',
    component: () => <About/>,
  },
];

