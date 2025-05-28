import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import {
  insertUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  supabase,
} from "../supabase";
import {
  UserInsertProps,
  UserRecord,
  UserType,
} from "../interface/user.interface";

interface UserStore {
  users: UserRecord[];
  currentUser: UserRecord | null;
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  fetchUserById: (id: number) => Promise<void>;
  createUser: (
    props: Omit<UserInsertProps, "user_type"> & { user_type?: UserType }
  ) => Promise<User | null>;
  updateUserById: (
    id: number,
    updates: Partial<UserInsertProps>
  ) => Promise<UserRecord | null>;
  deleteUserById: (id: number) => Promise<boolean>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });

    try {
      const data = await getAllUsers();

      /* TODO: modificar como en "createUser" */
      set({ users: data });
    } catch (error: any) {
      console.error("fetchUsers error:", error);

      set({ error: error.message ?? "Failed to fetch users" });
    } finally {
      set({ loading: false });
    }
  },

  fetchUserById: async (id) => {
    set({ loading: true, error: null });

    try {
      const data = await getUserById(id);

      /* TODO: modificar como en "createUser" */
      set({ currentUser: data });
    } catch (error: any) {
      console.error("fetchUserById error:", error);

      set({ error: error.message ?? `Failed to fetch user ${id}` });
    } finally {
      set({ loading: false });
    }
  },

  createUser: async (props) => {
    set({ loading: true, error: null });

    try {
      const { data, error } = await supabase.auth.signUp({
        email: props.email,
        password: props.password,
      });

      if (error || !data.user) {
        throw new Error(error?.message ?? "Error creating user");
      }

      await insertUser({
        ...props,
        user_type: props.user_type ?? UserType.Employee,
        id_auth: data.user.id,
      });

      const updatedUsers = [
        ...get().users,
        { ...props, id_auth: data.user.id } as UserRecord,
      ];

      set({ users: updatedUsers });

      return data.user;
    } catch (error: any) {
      console.error("createUser error:", error);

      set({ error: error.message ?? "Failed to create user" });

      return null;
    } finally {
      set({ loading: false });
    }
  },

  updateUserById: async (id, updates) => {
    set({ loading: true, error: null });

    try {
      const updated = await updateUser(id, updates);

      /* TODO: modificar como en "createUser" */
      if (updated) {
        set((state) => ({
          users: state.users.map((userElement) =>
            userElement.id === id ? updated : userElement
          ),
        }));
      }

      return updated;
    } catch (error: any) {
      console.error("updateUserById error:", error);

      set({ error: error.message ?? `Failed to update user ${id}` });

      return null;
    } finally {
      set({ loading: false });
    }
  },

  deleteUserById: async (id) => {
    set({ loading: true, error: null });

    try {
      const wasDeleted = await deleteUser(id);

      if (wasDeleted) {
        set((state) => ({
          users: state.users.filter((userElement) => userElement.id !== id),
        }));
      }

      return wasDeleted;
    } catch (error: any) {
      console.error("deleteUserById error:", error);

      set({ error: error.message ?? `Failed to delete user ${id}` });

      return false;
    } finally {
      set({ loading: false });
    }
  },
}));
