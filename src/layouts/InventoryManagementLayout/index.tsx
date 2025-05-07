import { Outlet } from "react-router";
import { MenuHamburguer, Sidebar } from "../../components/organisms";
import { useState } from "react";
import { Container } from "./index.styles";
import { useDeviceType } from "../../hooks/useDeviceType";

export const InventoryManagementLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const deviceType = useDeviceType();

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
