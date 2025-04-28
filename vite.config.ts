import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import terser from "@rollup/plugin-terser";
import { requiredEnvVars } from "./src/toolbox/requiredEnvVars";
import {
  AllowedModeType,
  allowedModes,
  allowedSecureModes,
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

    const isSecureMode = allowedSecureModes.includes(mode);

    return {
      plugins: [react()],
      define: {
        "import.meta.env": {
          ...env,
        },
      },
      build: {
        minify: isSecureMode ? "terser" : "esbuild", // usa terser solo en modos seguros (Minifica muchísimo mejor que esbuild siendo más agreviso y con más configuraciones pero es más lento y pesado)
        terserOptions: isSecureMode
          ? {
              compress: {
                drop_console: true, // elimina console.log en producción
                drop_debugger: true, // elimina debugger
                pure_funcs: ["console.info", "console.debug", "console.warn"], // también limpia estos logs
                passes: 2, // pasa dos veces el optimizador para mejorar aún más el resultado. Utilizar "2" suele ser lo ideal para mejor compresión sin afectar mucho el tiempo de build porque más de 3 ya casi no mejora el tamaño, solo hace más lento el build
                ecma: 2020, // asegura buena compresión moderna
              },
              format: {
                comments: false, // elimina todos los comentarios del bundle final
              },
            }
          : undefined,
        rollupOptions: {
          plugins: isSecureMode
            ? [
                terser({
                  compress: {
                    drop_console: true, // elimina console.log en producción
                    drop_debugger: true, // elimina debugger
                  },
                  format: {
                    comments: false, // elimina todos los comentarios del bundle final
                  },
                }),
              ]
            : [],
        },
        // sourcemap: !isSecureMode, // solo genera sourcemaps en dev/local pero NO en producción
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
