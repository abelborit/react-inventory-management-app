import { Navigate, Outlet } from "react-router";
import { Container } from "./index.styles";
import { useAuthContext } from "../../context/authContext/AuthContext";

export const AuthLayout = () => {
  const { userAuth } = useAuthContext();

  if (userAuth) {
    return <Navigate to="/dashboard/home" />;
  }

  return (
    <Container>
      <h1>AuthLayout</h1>

      <section>
        <Outlet />
      </section>
    </Container>
  );
};
