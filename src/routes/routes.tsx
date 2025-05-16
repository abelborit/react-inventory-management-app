/* https://reactrouter.com/start/data/installation */
/* ******************************************************************************************************************* */

import { createHashRouter, Navigate } from "react-router";
import { notFoundRoutes } from "./notFoundRoutes.tsx";
import { authRoutes } from "./authRoutes.tsx";
import { dashboardRoutes } from "./dashboardRoutes.tsx";
// import { Error404Page } from "../pages/Error404Page/index.tsx";

// export const router = createBrowserRouter([
export const router = createHashRouter([
  /* -- ROUTES: Raiz del proyecto -- */
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  /* -- ROUTES: Inventory Management -- */
  dashboardRoutes,

  /* -- ROUTES: Auth -- */
  authRoutes,

  /* -- ROUTES: 404 Not Found -- */
  notFoundRoutes,
]);
