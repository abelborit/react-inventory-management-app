import { useThemeContext } from "../../../context/themeContext/ThemeContext";
import { useAuthStore } from "../../../store/useAuthStore";
import { Container } from "./index.styles";

export const HomePageTemplate = () => {
  const { toggleTheme, currentTheme } = useThemeContext();
  const { user: userAuthStore } = useAuthStore();

  return (
    <Container>
      <div>HomePageTemplate</div>

      <button onClick={toggleTheme}>
        {currentTheme === "dark" ? "Theme 🌞" : "Theme 🌚"}
      </button>

      <hr style={{ width: "100%" }} />
      <pre>{JSON.stringify(userAuthStore, null, 3)}</pre>
      <hr style={{ width: "100%" }} />
    </Container>
  );
};
