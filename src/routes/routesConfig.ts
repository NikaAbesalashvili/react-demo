import React from "react";
import { Home, Auth, NotFound } from "../pages";

interface RouteConfig {
    path: string;
    component: React.FC;
};

const routesConfig: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/auth', component: Auth },
    { path: '*', component: NotFound },
];

export default routesConfig;
