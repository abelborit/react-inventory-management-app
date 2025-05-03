/* https://reactrouter.com/start/data/installation */
/* ******************************************************************************************************************* */

import { createHashRouter, Navigate } from "react-router";
import { LoaderComponent } from "../components/atoms/index.ts";
// import { Error404Page } from "../pages/Error404Page/index.tsx";

// export const router = createBrowserRouter([
export const router = createHashRouter([
  {
    path: "/",
    // element: <Outlet />,
    async lazy() {
      const { InventoryManagementLayout } = await import(
        "../layouts/InventoryManagementLayout"
      );
      return { Component: InventoryManagementLayout };
    },
    HydrateFallback: LoaderComponent,

    /* Cuando se entra a "/", se está haciendo Navigate antes de que React Router cargue un componente lazy. Entonces no hay ningún componente cargándose en "/", solo se está haciendo una redirección interna hacia "/home". Y el HydrateFallback (LoaderComponent) solo se muestra cuando el componente lazy todavía no está disponible. En "/" no hay un lazy que cargar. Por eso no se ve ningún LoaderComponent cuando se entra a "/" por primera vez. Solo se ve algo en "/home", porque ahí sí hay un lazy. Entonces tenemos que forzar que el primer nivel "/" también sea un componente lazy y así React Router sí muestra el LoaderComponent desde el arranque */
    // async lazy() {
    //   const { RootLayout } = await import("../layouts/RootLayout");
    //   return { Component: RootLayout };
    // },
    // HydrateFallback: LoaderComponent,

    /* https://github.com/remix-run/react-router/issues/12249#issuecomment-2613788828 */
    // hydrateFallbackElement: <LoaderComponent />,

    /* https://reactrouter.com/upgrading/v6#v7_partialhydration */
    // HydrateFallback: LoaderComponent,

    /* manejo de error para las rutas hijas. El "errorElement" permite mostrar un componente cuando: Falla el loader - Falla el lazy - Falla un render. El "errorElement" NO puede ser una función async como el que se usa en el "async lazy() {.....}". El "errorElement" debe ser un ReactNode directamente */
    // errorElement: <Error404Page />,

    children: [
      /* Usar un index route en true que haga Navigate para que así React Router puede resolver la redirección antes de renderizar ya que si se creara un componente que haga una validación según la ruta y luego coloque el Navigate hacia el /home y retorne un Oulet, React Router no "detecta" inmediatamente que debe hacer un Navigate, porque aún está esperando que el router resuelva internamente la estructura de la ruta. El Navigate dentro de un componente personalizado requiere que primero React Router monte ese árbol de componentes, y recién ahí ejecute el Navigate. Eso genera un frame en blanco donde parece que "no pasa nada" hasta que React haga un re-render. Eso es un comportamiento esperado (aunque molesto) */
      { index: true, element: <Navigate to="/home" replace /> },

      {
        path: "home",
        HydrateFallback: LoaderComponent, // es como un "LoaderFallback" el cual puede ser diferente por cada ruta
        async lazy() {
          const { HomePage } = await import("../pages/HomePage/index.tsx");
          return { Component: HomePage };
        },
      },
    ],
  },

  /* ROUTES - 404 */
  /* Ruta wildcard para rutas que no matcheen con ningun padre */
  {
    path: "*",
    HydrateFallback: LoaderComponent, // es como un "LoaderFallback" el cual puede ser diferente por cada ruta
    async lazy() {
      const { Error404Page } = await import("../pages/Error404Page/index.tsx");
      return { Component: Error404Page };
    },
  },
]);
