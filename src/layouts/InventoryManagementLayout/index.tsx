import { Outlet } from "react-router";
import { Sidebar } from "../../components/organisms";
import { useState } from "react";
import { Container } from "./index.styles";

export const InventoryManagementLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Container className={sidebarOpen ? "active" : ""}>
      <section className="contentSidebar">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
        />
      </section>

      <section className="contentMenuHamburguer">ContentMenuHamburguer</section>

      <section className="contentRoutes">
        <Outlet />
      </section>
    </Container>
  );
};
