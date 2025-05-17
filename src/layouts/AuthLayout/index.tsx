import { Navigate, Outlet } from "react-router";
import { Container } from "./index.styles";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";

export const AuthLayout = () => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <LoaderComponent />;
  }

  if (user) {
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
