import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { requiredEnvVars } from "./src/toolbox/requiredEnvVars";
import {
  AllowedModeType,
  allowedModes,
  loadExactEnvFile,
  logEnvMessage,
  validateEnvVariables,
} from "./src/toolbox/envValidator";

// https://vite.dev/config/
/* Vite automáticamente carga el archivo .env correspondiente si se usa el flag --mode como en el package.json */
export default defineConfig(({ mode }) => {
  try {
    if (!allowedModes.includes(mode as AllowedModeType)) {
      throw new Error(
        `Modo "${mode}" no permitido. Usa uno de: ${allowedModes.join(", ")}`
      );
    }

    const env = loadEnv(mode, process.cwd(), "");

    /* Mostrar en consola la variable de entorno utilizada al hacer el build */
    logEnvMessage(
      true,
      `Variables de entorno cargadas: ${env.VITE_APP_ENV}`,
      mode
    );

    /* cargar solo el env correspondiente al mode */
    const strictEnv = loadExactEnvFile(mode);

    /* validar las env del env correspondiente al mode */
    validateEnvVariables(strictEnv, requiredEnvVars, mode);

    /* Confirmar validación exitosa */
    logEnvMessage(
      true,
      `Variables de entorno validadas correctamente para: ${env.VITE_APP_ENV}`,
      mode
    );

    return {
      plugins: [react()],
      define: {
        "import.meta.env": {
          ...env,
        },
      },
    };
  } catch (error) {
    logEnvMessage(
      false,
      error instanceof Error ? error.message : String(error),
      mode
    );
    process.exit(1); // Salir explícitamente si falla algo importante
  }
});
