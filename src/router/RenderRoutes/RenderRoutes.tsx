import React from 'react';
import { Route, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../RouteWithSubRoutes";

interface IRenderRoutes {
  routes: any;
  auth?: boolean;
}

export const RenderRoutes: React.FC<IRenderRoutes> = (props) => {
  const {routes} = props

  return (
    <Switch>
      {routes.map((route: any) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <div>Not Found!</div>}/>
    </Switch>
  );
};

