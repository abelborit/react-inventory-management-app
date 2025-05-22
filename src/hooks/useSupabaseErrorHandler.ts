import Swal from "sweetalert2";
import { errorMessages } from "../constants/errorMessages";

export const useSupabaseErrorHandler = () => {
  function supabaseErrorHandler<T>(
    customTextError: string,
    error: any,
    fallback: T
  ): T {
    const rawMessage =
      error?.message ||
      error?.toString() ||
      "[useSupabaseErrorHandler] Unknown error occurred";

    console.error(
      "[useSupabaseErrorHandler]",
      `${customTextError} error:`,
      rawMessage
    );

    /* Encuentra si algún mensaje conocido está contenido en el error */
    const knownKey = Object.keys(errorMessages).find((key) =>
      rawMessage.includes(key)
    );

    const userFriendlyMessage = knownKey
      ? errorMessages[knownKey]
      : `${customTextError} falló: ${rawMessage}`;

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: userFriendlyMessage,
    });

    /* El fallback es el valor de retorno por defecto que se devuelve cuando ocurre un error. Sirve como una especie de "plan B" en caso de que algo falle. En lugar de que la función lance un error o errores inesperados o retorne undefined, devuelve un valor seguro o esperado para que la aplicación no se rompa que sería el null */
    return fallback;
  }

  return { supabaseErrorHandler };
};
