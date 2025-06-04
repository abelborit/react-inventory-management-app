import Swal from "sweetalert2";

export const useErrorGenericHandler = () => {
  function errorGenericHandler<T>(customTextError: string, fallback: T): T {
    console.error("[useErrorGenericHandler]", customTextError);

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: customTextError,
    });

    /* El fallback es el valor de retorno por defecto que se devuelve cuando ocurre un error. Sirve como una especie de "plan B" en caso de que algo falle. En lugar de que la función lance un error o errores inesperados o retorne undefined, devuelve un valor seguro o esperado para que la aplicación no se rompa que sería el null */
    return fallback;
  }

  return { errorGenericHandler };
};
