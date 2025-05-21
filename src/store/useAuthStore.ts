import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import type { User } from "@supabase/supabase-js";
import Swal from "sweetalert2";

interface AuthStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  initSupabaseSession: () => void;
  signInWithEmail: (email: string, password: string) => Promise<User | null>;
  signOut: () => Promise<void>;
}

function handleError<T>(customTextError: string, error: Error, fallback: T): T {
  console.error(`${customTextError} error:`, error.message);

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${customTextError} falló: ${error.message}`,
  });

  return fallback;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  initSupabaseSession: () => {
    set({ loading: true, error: null });

    /* Inicializa la escucha y recibe una notificación cada vez que un evento de autenticación aparezca, está en https://supabase.com/docs/reference/javascript/auth-onauthstatechange */
    const { data: authSupabaseListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        try {
          console.log("[auth event]", event, session);

          if (!session) {
            set({
              user: null,
              loading: false,
              error: "There isn't any session",
            });
          } else {
            set({
              user: session?.user,
              loading: false,
              error: null,
            });
          }
        } catch (error: any) {
          console.error("❌ Error during auth state change:", error);

          set({
            user: null,
            loading: false,
            error: "Authentication error. Please try again later.",
          });

          handleError("Initialice app error", error, null);
        }

        // set({
        //   user: session?.user ?? null,
        //   loading: false,
        //   error: null,
        // });
      }
    );

    /* llamar al unsubscribe para remover el callback */
    return () => authSupabaseListener.subscription.unsubscribe();
  },

  signInWithEmail: async (email, password) => {
    set({ loading: true, error: null });

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      set({ user: data.user, loading: false });

      return data.user;
    } catch (error: any) {
      console.error("signIn error:", error);

      set({ error: error.message ?? "Login failed", loading: false });

      handleError("Login failed", error, null);
      return null;
    }
  },

  signOut: async () => {
    set({ loading: true, error: null });

    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      set({ user: null, loading: false });
    } catch (error: any) {
      console.error("signOut error:", error);

      set({ error: error.message ?? "Logout failed", loading: false });

      handleError("Logout failed", error, null);
      throw error;
    }
  },
}));
