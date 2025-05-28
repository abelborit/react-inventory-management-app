import { Navigate /* , Outlet */ } from "react-router";
import { MenuHamburguer, Sidebar } from "../../components/organisms";
import { useState } from "react";
import { Container } from "./index.styles";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useAuthStore } from "../../store/useAuthStore";
import { LoaderComponent } from "../../components/molecules";
import { useSupabaseErrorHandler } from "../../hooks/useSupabaseErrorHandler";

export const InventoryManagementLayout = () => {
  const {
    user: userAuthStore,
    loading: loadingAuthStore,
    error: errorAuthStore,
  } = useAuthStore();
  const { supabaseErrorHandler } = useSupabaseErrorHandler();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const deviceType = useDeviceType();

  if (loadingAuthStore) {
    return <LoaderComponent />;
  }

  if (errorAuthStore) {
    supabaseErrorHandler("[useAuthStore]", errorAuthStore, null);
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
        {/* <Outlet /> */}
        <pre>{JSON.stringify(userAuthStore, null, 3)}</pre>
      </section>
    </Container>
  );
};
