import { Navigate, Outlet } from "react-router";
import { Container, Section } from "./index.styles";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";
import { useSupabaseErrorHandler } from "../../hooks/useSupabaseErrorHandler";
import { useUserStore } from "../../store/useUserStore";

export const AuthLayout = () => {
  const userAuthStore = useAuthStore((state) => state.user);
  const loadingAuthStore = useAuthStore((state) => state.loading);
  const errorUserStore = useUserStore((state) => state.error);
  const loadingUserStore = useUserStore((state) => state.loading);
  const { supabaseErrorHandler } = useSupabaseErrorHandler();

  if (loadingAuthStore || loadingUserStore) {
    return <LoaderComponent />;
  }

  if (errorUserStore) {
    supabaseErrorHandler("[AuthLayout - useUserStore]", errorUserStore, null);
  }

  if (userAuthStore) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return (
    <Container>
      <Section>
        <Outlet />
      </Section>
    </Container>
  );
};
