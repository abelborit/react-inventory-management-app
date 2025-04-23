// src/lib/supabaseClient.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Carga de variables de entorno
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

// // Validación básica de variables para evitar errores en tiempo de ejecución
// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error(
//     "Supabase URL o Anon Key no están definidos en las variables de entorno."
//   );
// }

// Validación estricta de variables para evitar errores en tiempo de ejecución
if (!supabaseUrl?.trim() || !supabaseAnonKey?.trim()) {
  throw new Error(
    "[Supabase] - Las variables de entorno [SUPABASE URL] o [SUPABASE ANON KEY] están incompletas o mal definidas."
  );
}

// Creación singleton del cliente de Supabase
export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
);
