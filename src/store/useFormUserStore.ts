import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  FormLoginInterface,
  initialFormLogin,
} from "../constants/initialFormLogin";
import { initialFormRegister } from "../constants/initialFormRegister";
import { UserInsertProps } from "../interface/user.interface";

interface FormUserStore {
  formLogin: FormLoginInterface;
  formRegister: UserInsertProps;
  // isFormRegisterValid: boolean;

  handleSetFormLogin: (values: Partial<FormLoginInterface>) => void;
  handleSetFormRegister: (values: Partial<UserInsertProps>) => void;
  // handleFormRegisterValidity: (isValid: boolean) => void;

  getLoginData: () => FormLoginInterface;
  getRegisterData: () => UserInsertProps;
}

export const useFormUserStore = create<FormUserStore>()(
  /* persist: middleware que guarda parte del estado en localStorage */
  persist(
    (set, get) => ({
      formLogin: initialFormLogin,
      formRegister: initialFormRegister,
      // isFormRegisterValid: false,

      handleSetFormLogin: (values) => {
        const current = get().formLogin;
        set({
          formLogin: {
            ...current,
            ...Object.fromEntries(
              Object.entries(values).map(([key, value]) => [
                key,
                typeof value === "string" ? value.trim() : value,
              ])
            ),
          },
        });
      },

      handleSetFormRegister: (values) => {
        const current = get().formRegister;
        set({
          formRegister: {
            ...current,
            ...Object.fromEntries(
              Object.entries(values).map(([key, value]) => [
                key,
                typeof value === "string" ? value.trim() : value,
              ])
            ),
          },
        });
      },

      // handleFormRegisterValidity: (isValid) => {
      //   set({ isFormRegisterValid: isValid });
      // },

      getLoginData: () => get().formLogin,
      getRegisterData: () => get().formRegister,
    }),
    {
      name: "form-user-store", // clave para localStorage
      /* partialize: selecciona qué partes del estado se deben persistir (en este caso, los formularios) */
      partialize: (state) => ({
        formLogin: state.formLogin,
        formRegister: state.formRegister,
      }),
    }
  )
);

/* **************************************************************************************************** */
/*
handleSetFormLogin: (values) => {
  const current = get().formLogin;
  set({
    formLogin: {
      ...current,
      ...Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          typeof value === "string" ? value.trim() : value,
        ])
      ),
    },
  });
}
*/

/*
--- Explicación ---

  **1. Obtener el estado actual del formulario de login

const current = get().formLogin;

  **1.1 Se obtiene el formulario actual guardado en el estado.
  **1.2 Por ejemplo, puede ser:

{
  email: "test@example.com",
  password: "123456",
}

---------------------------------------------------------------------------

  **2. Limpiar y actualizar los campos recibidos

Object.entries(values).map(([key, value]) => [
  key,
  typeof value === "string" ? value.trim() : value,
])

  **2.1 values es un objeto parcial, como:

{ email: "  nuevo@correo.com  " }

  **2.2 Object.entries(values) convierte esto a:

[ ['email', '  nuevo@correo.com  '] ]


  **2.3 Se aplica trim() solo si el valor es un string:

[ ['email', 'nuevo@correo.com'] ]


  **2.4 Luego Object.fromEntries(...) convierte esto de nuevo a objeto:

{ email: "nuevo@correo.com" }

---------------------------------------------------------------------------

  **3. Actualizar el estado final

set({
  formLogin: {
    ...current,
    ...{ email: "nuevo@correo.com" },
  },
});

  **3.1 Hace un merge entre el estado actual y los valores nuevos.
  **3.2 Si solo envías el email, el password se mantiene igual:

{
  email: "nuevo@correo.com",
  password: "123456"
}
*/
