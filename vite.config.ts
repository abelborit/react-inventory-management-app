import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { requiredEnvVars } from "./src/toolbox/requiredEnvVars";
import {
  loadExactEnvFile,
  validateEnvVariables,
} from "./src/toolbox/envValidator";

// https://vite.dev/config/
/* Vite automáticamente carga el archivo .env correspondiente si se usa el flag --mode como en el package.json */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  /* Mostrar en consola la variable de entorno utilizada al hacer el build */
  console.log(
    `✅ [VITE][${mode}] Variables de entorno del proyecto: ${env.VITE_APP_ENV}`
  );

  /* cargar solo el env correspondiente al mode */
  const strictEnv = loadExactEnvFile(mode);

  /* validar las env del env correspondiente al mode */
  validateEnvVariables(strictEnv, requiredEnvVars, mode);

  console.log(
    `✅ [VITE][${mode}] Variables de entorno válidas para: ${env.VITE_APP_ENV}`
  );

  return {
    plugins: [react()],
    define: {
      "import.meta.env": {
        ...env,
      },
    },
  };
});
