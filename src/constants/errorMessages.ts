import { SupabaseErrorCodes } from "../interface/supabaseErrorCodes.interface";

export const errorMessages: Record<SupabaseErrorCodes | string, string> = {
  /* FORMA 1: colocando el nombre de forma directa */
  // "User already registered": "Este usuario ya está registrado.",

  /* FORMA 2: colocando el nombre utilizando un enum */
  [SupabaseErrorCodes.UserAlreadyRegistered]:
    "Este usuario ya está registrado.",
  [SupabaseErrorCodes.InvalidCredentials]: "Correo o contraseña incorrectos.",
  [SupabaseErrorCodes.EmailNotConfirmed]: "Debes confirmar tu correo.",
  [SupabaseErrorCodes.NetworkError]: "Error de conexión.",
  "Unknown error occurred": "Ocurrió un error desconocido.",
};
