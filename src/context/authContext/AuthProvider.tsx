/* crear el provider que es un componente que vamos a utilizar para obtener la información de nuestro context y es quien envolverá al componente más alto para repartir la información a sus hijos. Aquí se va a definir el estado a través de una interface para ir viendo cómo quiero que se vea a futuro la aplicación */
import { useMemo, /* JSX, */ useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "../../supabase";
import type { User } from "@supabase/supabase-js";

interface AuthProviderProps {
  /* Aquí se limita los children a ser solo: Un único JSX.Element - Un array de JSX.Element - NO acepta string, number, boolean, etc. */
  // children: JSX.Element | JSX.Element[];

  /* ReactNode es más flexible ya que acepta cualquier cosa que React pueda renderizar: JSX.Element - string - number - boolean - null - undefined - Un array de cualquiera de estos tipos */
  children: ReactNode;
}

/* aquí es cómo quiero que luzca mi estado inicial que no necesariamente será el mismo que la interface del Context ya que en la función de abajo se crearán funciones (porque se hará uso de los reducers en algunas ocasiones o solo funciones simples sin reducers lo cual se puede eliminar su importación) las cuales serán añadidas al value y ahí ese value tiene que satisfacer todo lo que se solicita en la interface del Context */
export interface AuthProviderStateInterface {
  userAuth: Partial<User> | null;
  loadingAuth: boolean;
  errorAuth: string | null;
}

const INITIAL_STATE: AuthProviderStateInterface = {
  userAuth: null,
  loadingAuth: true,
  errorAuth: null,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userAuth, setUserAuth] = useState<Partial<User> | null>(
    INITIAL_STATE.userAuth
  );
  const [loadingAuth, setLoadingAuth] = useState(INITIAL_STATE.loadingAuth);
  const [errorAuth, setErrorAuth] = useState<string | null>(
    INITIAL_STATE.errorAuth
  );

  useEffect(() => {
    /* recibir una notificación cada vez que un evento de autenticación aparezca, está en https://supabase.com/docs/reference/javascript/auth-onauthstatechange */
    const { data: authSupabaseListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        try {
          console.log("[auth event]", event, session);

          if (!session) {
            setUserAuth(null);
            // setUserAuth({ id: "prueba" });
          } else {
            setUserAuth(session.user);
          }

          setErrorAuth(null); // Limpiar error si se recupera sesión correctamente
        } catch (error) {
          console.error("❌ Error during auth state change:", error);
          setUserAuth(null);
          setErrorAuth("Authentication error. Please try again later.");
        } finally {
          setLoadingAuth(false);
        }
      }
    );

    return () => {
      /* llamar al unsubscribe para remover el callback */
      authSupabaseListener.subscription.unsubscribe();
    };
  }, []);

  /* funciones y métodos para colocar en el value... */
  /* Para optimizar sería bueno hacer uso de useCallback() para las funciones y useMemo() para los valores que se le pasarán al value para evitar que en cada render del provider (se hace un nuevo render cada vez que cambia el estado) se cree una nueva referencia en memoria de la misma función y el mismo objeto del estado (misma referencia en memoria pero diferente valor ya que se va cambiando). Esto es lo mismo que se haría para un custom hook para mejorar el performance y no tener fugas de memoria. Es decir, si el valor de API Context es un objeto deberemos pasarlo memorizado ya que si no se hace esto entonces en cada render estaremos generando una nueva instancia del mismo objeto lo que provocará que todos los componentes consumidores se rendericen. Para resolver este problema emplearemos los hooks useMemo y useCallback... */

  const valueProvider = useMemo(
    () => ({
      // ...userAuth,
      userAuth,
      loadingAuth,
      errorAuth,
    }),
    [userAuth, loadingAuth, errorAuth]
  );

  return (
    <AuthContext.Provider value={valueProvider}>
      {children}
    </AuthContext.Provider>
  );
};
