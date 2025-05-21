import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { AuthProvider } from "./context/authContext/AuthProvider.tsx";
import { ThemeProvider } from "./context/themeContext/ThemeProvider.tsx";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./toolbox/lib/react-query-client.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* proveer el cliente de TanStack Query a toda la aplicación */}
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  </StrictMode>
);
