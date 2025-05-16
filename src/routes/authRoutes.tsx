import { Navigate } from "react-router";
import { LoaderComponent } from "../components/molecules";

export const authRoutes = {
  path: "/auth",
  // element: <Outlet />,

  async lazy() {
    const { AuthLayout } = await import("../layouts/AuthLayout/index.tsx");
    return { Component: AuthLayout };
  },

  HydrateFallback: LoaderComponent,

  children: [
    { index: true, element: <Navigate to="login" replace /> },

    {
      path: "login",
      HydrateFallback: LoaderComponent,
      async lazy() {
        const { LoginPage } = await import("../pages/LoginPage/index.tsx");
        return { Component: LoginPage };
      },
    },
  ],
};
