import { Navigate, Outlet } from "react-router";
import { MenuHamburguer, Sidebar } from "../../components/organisms";
import { useState } from "react";
import { Container } from "./index.styles";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";
import { useSupabaseErrorHandler } from "../../hooks/useSupabaseErrorHandler";
import { useUserStore } from "../../store/useUserStore";

export const InventoryManagementLayout = () => {
  const userAuthStore = useAuthStore((state) => state.user);
  const loadingAuthStore = useAuthStore((state) => state.loading);
  const errorUserStore = useUserStore((state) => state.error);
  const loadingUserStore = useUserStore((state) => state.loading);
  const { supabaseErrorHandler } = useSupabaseErrorHandler();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const deviceType = useDeviceType();

  if (loadingAuthStore || loadingUserStore) {
    return <LoaderComponent />;
  }

  if (errorUserStore) {
    supabaseErrorHandler(
      "[InventoryManagementLayout - useUserStore]",
      errorUserStore,
      null
    );
  }

  if (!userAuthStore) {
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
