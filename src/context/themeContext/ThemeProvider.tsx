import { ReactNode, useMemo, useState } from "react";
import { ThemeContext, ThemeMode } from "./ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/themes";

interface ThemeProviderProps {
  /* Aquí se limita los children a ser solo: Un único JSX.Element - Un array de JSX.Element - NO acepta string, number, boolean, etc. */
  // children: JSX.Element | JSX.Element[];

  /* ReactNode es más flexible ya que acepta cualquier cosa que React pueda renderizar: JSX.Element - string - number - boolean - null - undefined - Un array de cualquiera de estos tipos */
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeUsed, setThemeUsed] = useState<ThemeMode>("dark");

  const currentTheme = themeUsed;
  const themeStyles = currentTheme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeUsed((prev) => (prev === "light" ? "dark" : "light"));
  };

  const contextValue = useMemo(
    () => ({ currentTheme, toggleTheme }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={themeStyles}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
