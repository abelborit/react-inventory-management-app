import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
/* https://reactrouter.com/upgrading/v6#upgrade-to-v7 */
/* RouterProvider proviene de una importación profunda porque dependen de "react-dom" */
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/routes";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
  /* Importante: Llamar a useAuthStore.getState().initSupabaseSession() una vez en el arranque de la app (p.ej. en App.tsx) para que empiece a escuchar la sesión de Supabase */
  const initAuth = useAuthStore((state) => state.initSupabaseSession);
  const authStore = useAuthStore((state) => state);
  console.log("authStore", authStore);

  useEffect(() => {
    /* aquí también se tiene una función de des-susbcripción, entonces por eso se coloca en el return de useEffect, ya que el useEffect la función de retorno que tiene es para ser una función de limpieza */
    const initSupabaseAuth = initAuth();

    return initSupabaseAuth;
  }, [initAuth]);

  // /* Manipular la URL para asegurarse de que el path sea la raiz "/" ya que como se está usando el createHashRouter "#" entonces habría problemas como, por ejemplo, podría aparecer cosas antes del hash como http://localhost:5173/otracosa#/dashboard/home en vez de directamente el hash como http://localhost:5173/#/dashboard/home al redirigir cuando se entra a la ruta raiz */
  // if (window.location.pathname !== "/") {
  //   /* establecer que el pathname solo sea con "/" para evitar palabras antes del hash */
  //   window.location.pathname = "/";
  // }

  /* https://reactrouter.com/upgrading/v6#deprecations */
  /* en versiones anteriores se usaba fallbackElement pero ahora ya que está obsoleto (deprecado). Ahora se utiliza el "HydrateFallback" o "hydrateFallbackElement" que está dentro de "router.tsx" */
  return (
    <>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
