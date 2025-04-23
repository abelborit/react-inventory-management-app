import fs from "fs";
import dotenv from "dotenv";
import path from "path";

/* validación automática de variables de entorno en vite.config.ts, que se ejecuta al iniciar el build o dev, y lanza un error si falta alguna o si alguna está vacía */
export function validateEnvVariables(
  env: Record<string, string>,
  requiredVars: string[],
  mode: string
) {
  const missing = requiredVars.filter(
    (key) => !env[key] || env[key].trim() === ""
  );

  /* OPCIÓN 1: ideal para entornos donde se prefiere un stack trace completo o para integraciones con CI/CD que atrapan excepciones. */
  /* Un stack trace (en español: rastro de pila o traza de pila) es una lista de todas las funciones que se han ido llamando hasta que ocurrió un error. Es lo que se ve cuando el programa lanza un throw new Error(...) o cuando ocurre una excepción no capturada.
  ¿Para qué sirve?
    - Te dice dónde ocurrió el error exactamente.
    - Muestra la secuencia de llamadas que llevó hasta ese punto.
    - Es útil para debuggear: te ayuda a encontrar errores más rápido.

  Ejemplo:
    throw new Error("Algo salió mal");
  */
  if (missing.length > 0) {
    const errorMessage = [
      `\n❌ [VITE][${mode}] ERROR: Las siguientes variables de entorno faltan o están vacías:\n`,
      ...missing.map((key) => ` - ${key}`),
      `\n🔶 Corrige las variables antes de continuar.\n`,
    ].join("\n");

    throw new Error(errorMessage); // Lanza el error en lugar de salir con process.exit
  }

  /* OPCIÓN 2: para detener el proceso inmediatamente */
  /*
    - Finaliza el proceso inmediatamente
    - No muestra el stack trace (a menos que lo imprimas tú antes)
    - Útil para scripts simples o cuando no quieres mostrar detalles técnicos
    - El número 1 indica error (el 0 sería una salida exitosa)

    Ejemplo:
      console.error("Algo salió mal");
      process.exit(1);
  */
  // if (missing.length > 0) {
  //   console.error(
  //     `\n❌ [VITE][${mode}] ERROR: Variables de entorno faltantes o vacías:\n`
  //   );
  //   missing.forEach((key) => console.error(` - ${key}`));
  //   console.error("\n🔶 Corrige las variables antes de continuar.\n");
  //   process.exit(1); // Detiene el proceso
  // }
}

/* función utilitaria para que cargue solo un archivo .env específico porque en loadEnv(mode, process.cwd(), "") en su tercer argumento (prefix) vacío ("") le dice a Vite: "Cárgame todas las variables del .env para ese modo, sin importar si empiezan o no con VITE_."" Pero además, cuando se carga .env.production, Vite no ignora .env ni .env.development ni .env.staging — al contrario, los fusiona todos. Es decir, cuando se hace: vite build --mode production

Carga (en este orden, y los últimos sobreescriben a los primeros):
  - .env
  - .env.development
  - .env.staging
  - .env.production

Cuando se hace vite build --mode production, ambas variables están presentes, porque .env se carga antes que .env.production. Por eso, aunque no se declare, por ejemplo, VITE_APP_SUPABASE_URL en .env.production, igual aparece en env. Con esto se asegura que solo se revisen las variables definidas, por ejemplo, en .env.production*/
export function loadExactEnvFile(mode: string): Record<string, string> {
  const filePath = path.resolve(process.cwd(), `.env.${mode}`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`\n⚠️  No se encontró el archivo .env.${mode}\n`);
  }
  const parsed = dotenv.parse(fs.readFileSync(filePath));
  return parsed;
}
