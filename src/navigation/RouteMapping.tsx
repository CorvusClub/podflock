import { Switch, Route } from "react-router";
import { NavigationRoute } from "./routes";
import { Home } from "@pages/Home";
import React from "react";

export const RouteMapping = () => (
    <Switch>
        <Route exact={true} path={NavigationRoute.Home} component={Home} />
    </Switch>
);
