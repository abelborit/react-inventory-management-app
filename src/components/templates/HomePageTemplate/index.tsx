import { useThemeContext } from "../../../context/themeContext/ThemeContext";

export const HomePageTemplate = () => {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <>
      <div>HomePageTemplate</div>

      <button onClick={toggleTheme}>
        {currentTheme === "dark" ? "Theme 🌞" : "Theme 🌚"}
      </button>
    </>
  );
};
