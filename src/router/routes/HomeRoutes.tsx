import { Route } from "@src/typings/routes";
import { lazy } from "react";

const homeRoutes: Route[] = [
  {
    component: lazy(() => import("@src/pages/home")),
    path: "/",
  },
];

export default homeRoutes;
