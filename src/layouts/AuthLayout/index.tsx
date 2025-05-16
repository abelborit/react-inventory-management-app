import { Outlet } from "react-router";
import { Container } from "./index.styles";

export const AuthLayout = () => {
  return (
    <Container>
      <h1>AuthLayout</h1>

      <section>
        <Outlet />
      </section>
    </Container>
  );
};
