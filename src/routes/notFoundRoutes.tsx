import { LoaderComponent } from "../components/molecules";

export const notFoundRoutes = {
  /* Ruta wildcard para rutas que no matcheen con ningun padre */
  path: "*",

  async lazy() {
    const { InventoryManagementLayout } = await import(
      "../layouts/InventoryManagementLayout"
    );
    return { Component: InventoryManagementLayout };
  },

  HydrateFallback: LoaderComponent,

  children: [
    {
      path: "*",
      HydrateFallback: LoaderComponent,
      async lazy() {
        const { Error404Page } = await import(
          "../pages/Error404Page/index.tsx"
        );
        return { Component: Error404Page };
      },
    },
  ],
};
