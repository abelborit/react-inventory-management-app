import { Navigate, Outlet } from "react-router";
import { Container } from "./index.styles";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";
import { useSupabaseErrorHandler } from "../../hooks/useSupabaseErrorHandler";

export const AuthLayout = () => {
  const {
    user: userAuthStore,
    loading: loadingAuthStore,
    error: errorAuthStore,
  } = useAuthStore();
  const { supabaseErrorHandler } = useSupabaseErrorHandler();

  if (loadingAuthStore) {
    return <LoaderComponent />;
  }

  if (errorAuthStore) {
    supabaseErrorHandler("[useAuthStore]", errorAuthStore, null);
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
