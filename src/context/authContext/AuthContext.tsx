/* el context es quien va a exponer los datos a los demás componentes */
import { createContext, useContext } from "react";
import type { User } from "@supabase/supabase-js";

/* aquí es donde se coloca qué es lo que quiero distribuir en el value del Provider, aquí deberían estar todos los métodos, estados, etc... */
interface AuthContextProps {
  userAuth: User | null;
  loadingAuth: boolean;
  errorAuth: string | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

/* también se puede crear como un custom hook aquí para utilizar este contexto y ahorrarnos unas importaciones y líneas de código adicionales en donde se vaya a utilizar este contexto... */
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a Provider...");
  }

  return {
    ...context,
    // context,
  };
};
