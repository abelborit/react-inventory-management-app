import { Navigate, Outlet } from "react-router";
import { Container } from "./index.styles";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";
import { useSupabaseErrorHandler } from "../../hooks/useSupabaseErrorHandler";
import { useUserStore } from "../../store/useUserStore";

export const AuthLayout = () => {
  const { user: userAuthStore, loading: loadingAuthStore } = useAuthStore();
  const { error: errorUserStore, loading: loadingUserStore } = useUserStore();
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
      <section>
        <Outlet />
      </section>
    </Container>
  );
};
