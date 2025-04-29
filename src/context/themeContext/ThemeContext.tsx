import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
  currentTheme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a Provider...");
  }

  return context;
};
