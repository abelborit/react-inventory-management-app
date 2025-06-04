import { useThemeContext } from "../../../context/themeContext/ThemeContext";
import { useAuthStore } from "../../../store/useAuthStore";
import { Container } from "./index.styles";

export const HomePageTemplate = () => {
  const { toggleTheme, currentTheme } = useThemeContext();
  const userAuthStore = useAuthStore((state) => state.user);

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
