import { create } from "zustand";
import {
  insertUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
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
  ) => Promise<UserRecord | null>;
  updateUserById: (
    id: number,
    updates: Partial<UserInsertProps>
  ) => Promise<UserRecord | null>;
  deleteUserById: (id: number) => Promise<boolean>;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });

    try {
      const data = await getAllUsers();

      set({ users: data, loading: false });
    } catch (error: any) {
      console.error("fetchUsers error:", error);

      set({ error: error.message ?? "Failed to fetch users", loading: false });
    }
  },

  fetchUserById: async (id) => {
    set({ loading: true, error: null });

    try {
      const data = await getUserById(id);

      set({ currentUser: data, loading: false });
    } catch (error: any) {
      console.error("fetchUserById error:", error);

      set({
        error: error.message ?? `Failed to fetch user ${id}`,
        loading: false,
      });
    }
  },

  createUser: async (props) => {
    set({ loading: true, error: null });

    try {
      const user = await insertUser({
        ...props,
        user_type: props.user_type ?? UserType.Employee,
      });

      if (user) {
        set((state) => ({ users: [...state.users, user] }));
      }

      set({ loading: false });

      return user;
    } catch (error: any) {
      console.error("createUser error:", error);

      set({ error: error.message ?? "Failed to create user", loading: false });

      return null;
    }
  },

  updateUserById: async (id, updates) => {
    set({ loading: true, error: null });

    try {
      const user = await updateUser(id, updates);

      if (user) {
        set((state) => ({
          users: state.users.map((u) => (u.id === id ? user : u)),
        }));
      }

      set({ loading: false });

      return user;
    } catch (error: any) {
      console.error("updateUserById error:", error);

      set({
        error: error.message ?? `Failed to update user ${id}`,
        loading: false,
      });

      return null;
    }
  },

  deleteUserById: async (id) => {
    set({ loading: true, error: null });

    try {
      const ok = await deleteUser(id);

      if (ok) {
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        }));
      }

      set({ loading: false });

      return ok;
    } catch (error: any) {
      console.error("deleteUserById error:", error);

      set({
        error: error.message ?? `Failed to delete user ${id}`,
        loading: false,
      });

      return false;
    }
  },
}));
