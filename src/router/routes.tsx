import { Home } from "../pages/Home";
import { RenderRoutes } from "./RenderRoutes";
import { Publications } from "../pages/Publications";

export const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home/> },
  {
    path: "/publications",
    key: "PUBLICATIONS",
    component: RenderRoutes,
    routes: [
      {
        path: "/publications",
        key: "PUBLICATIONS_ROOT",
        exact: true,
        component: () => <Publications/>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

