import Swal from "sweetalert2";
import { supabase } from "./supabase.config";
import { UserInsertProps, UserRecord } from "../interface/user.interface";

const TABLE = import.meta.env.VITE_APP_USERS_TABLE;

function handleError<T>(context: string, error: Error, fallback: T): T {
  console.error(`${context} error:`, error.message);

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${context} falló: ${error.message}`,
  });

  return fallback;
}

export const insertUser = async (
  props: UserInsertProps
): Promise<UserRecord | null> => {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(props)
      .select()
      .maybeSingle();

    if (error) throw error;

    return data!;
  } catch (error: any) {
    return handleError("Insertar usuario", error, null);
  }
};

export const getAllUsers = async (): Promise<UserRecord[]> => {
  try {
    const { data, error } = await supabase.from(TABLE).select("*");

    if (error) throw error;

    return data!;
  } catch (error: any) {
    return handleError("Obtener todos los usuarios", error, []);
  }
};

export const getUserById = async (id: number): Promise<UserRecord | null> => {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;

    return data!;
  } catch (error: any) {
    return handleError(`Obtener usuario ${id}`, error, null);
  }
};

export const updateUser = async (
  id: number,
  updates: Partial<UserInsertProps>
): Promise<UserRecord | null> => {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .update(updates)
      .eq("id", id)
      .select()
      .maybeSingle();

    if (error) throw error;

    return data!;
  } catch (error: any) {
    return handleError(`Actualizar usuario ${id}`, error, null);
  }
};

export const deleteUser = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase.from(TABLE).delete().eq("id", id);

    if (error) throw error;

    return true;
  } catch (error: any) {
    handleError(`Eliminar usuario ${id}`, error, false);
    return false;
  }
};
