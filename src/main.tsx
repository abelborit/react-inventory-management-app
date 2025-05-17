import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { AuthProvider } from "./context/authContext/AuthProvider.tsx";
import { ThemeProvider } from "./context/themeContext/ThemeProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </AuthProvider> */}
  </StrictMode>
);
