import { useThemeContext } from "../../../context/themeContext/ThemeContext";
import { Container } from "./index.styles";

export const HomePageTemplate = () => {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <Container>
      <div>HomePageTemplate</div>

      <button onClick={toggleTheme}>
        {currentTheme === "dark" ? "Theme 🌞" : "Theme 🌚"}
      </button>
    </Container>
  );
};
