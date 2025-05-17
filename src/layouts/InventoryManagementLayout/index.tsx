import { Navigate, Outlet } from "react-router";
import { MenuHamburguer, Sidebar } from "../../components/organisms";
import { useState } from "react";
import { Container } from "./index.styles";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";

export const InventoryManagementLayout = () => {
  const { user, loading } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const deviceType = useDeviceType();

  if (loading) {
    return <LoaderComponent />;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Container className={sidebarOpen ? "active" : ""}>
      {deviceType === "laptop" || deviceType === "desktop" ? (
        <section className="contentSidebar">
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
          />
        </section>
      ) : null}

      {deviceType === "mobile" || deviceType === "tablet" ? (
        <section className="contentMenuHamburguer">
          <MenuHamburguer />
        </section>
      ) : null}

      <section className="contentRoutes">
        <Outlet />
      </section>
    </Container>
  );
};
