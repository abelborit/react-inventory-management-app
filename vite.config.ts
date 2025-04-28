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
      /* optimización "Split Chunks" de la aplicación utilizando la opción optimizeDeps de Vite que permite especificar qué módulos deberían ser precompilados y optimizados para dividir el código en partes más pequeñas que puedan cargarse de manera más eficiente, especialmente en aplicaciones grandes. Con esta configuración Vite precompilará y optimizará los módulos especificados en optimizeDeps lo que puede ayudar a mejorar el tiempo de carga de la aplicación especialmente en entornos de producción */
      /* es importante tener en cuenta que optimizeDeps se usa principalmente para optimizar el rendimiento de la carga inicial de la aplicación dividiendo el código en partes más pequeñas. Por lo tanto, generalmente se querrán incluir los módulos que son esenciales para la carga inicial de la aplicación. Si se incluyen todas las dependencias del proyecto en optimizeDeps esto podría aumentar el tiempo de compilación y no necesariamente resultará en un beneficio significativo para el rendimiento de la aplicación. Por lo tanto, es recomendable incluir solo las dependencias esenciales que se utilizan en la carga inicial de la aplicación como las bibliotecas principales del marco de trabajo (por ejemplo, React, Vue, Angular), enrutadores, bibliotecas de gestión de estados, y otras dependencias críticas que sean necesarias para la funcionalidad básica de la aplicación. */
      optimizeDeps: {
        include: [
          "react",
          "react-dom",
          "react-router",
          "react-icons",
          "styled-components",
        ],
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
