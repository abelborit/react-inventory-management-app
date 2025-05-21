import { QueryClient } from "@tanstack/react-query";

/* En queries (defaultOptions.queries)
{
  staleTime: 1000 * 60 * 5,             // Tiempo antes de que se considere "stale" (obsoleto) (colocar 0 sería la data en tiempo real)
  cacheTime: 1000 * 60 * 10,            // Tiempo que vive el cache en memoria (si no se usa)
  retry: 2,                             // Número de reintentos en error
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Retraso progresivo
  refetchOnWindowFocus: false,          // Refetch al volver al foco de la ventana
  refetchOnReconnect: true,             // Refetch al reconectarse
  refetchInterval: false,               // Refetch automático cada cierto tiempo (false = desactivado)
  refetchIntervalInBackground: false,   // Refetch en background (segundo plano) cuando está inactivo
  suspense: false,                      // Útil con React Suspense
  useErrorBoundary: false,              // Lanza errores a un ErrorBoundary
  keepPreviousData: true,               // Mantiene datos anteriores mientras se hace una nueva consulta
  select: data => data,                 // Transforma la data antes de entregarla
  placeholderData: undefined,           // Datos temporales mientras se hace la consulta
  structuralSharing: true               // Optimiza el cambio de estado de objetos
}
*/

/* En mutations (defaultOptions.mutations)
{
  retry: 1,                         // Reintentos automáticos
  retryDelay: 1000,                 // Retraso entre reintentos
  useErrorBoundary: false,          // Manejo de errores con ErrorBoundary

  onMutate: async (variables) => {
    // Hacer cosas antes de mutar, por ejemplo optimismo
  },

  onError: (error, variables, context) => {
    // Manejo centralizado de errores
  },

  onSuccess: (data, variables, context) => {
    // Lógica tras mutación exitosa
  },

  onSettled: (data, error, variables, context) => {
    // Lógica al finalizar (éxito o error)
  }
}
*/

const isProduction = import.meta.env.VITE_APP_ENV === "production";

const options = isProduction
  ? {
      queries: {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchIntervalInBackground: false,
      },
      mutations: {
        retry: 1,
        retryDelay: 350,
      },
    }
  : {
      queries: {
        staleTime: 1000 * 60,
        cacheTime: 1000 * 60,
        retry: 1,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        refetchIntervalInBackground: false,
      },
      mutations: {
        retry: 1,
        retryDelay: 350,
      },
    };

/* crear el cliente de TanStack Query */
export const queryClient = new QueryClient({
  defaultOptions: options,
});
