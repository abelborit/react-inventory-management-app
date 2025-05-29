import { Container } from "./index.styles";
import { useThemeContext } from "../../../context/themeContext/ThemeContext";
import { Moon, Sun } from "../../../assets/svg";
import { SvgIconComponent } from "../../atoms";

export const ToggleTheme = () => {
  const { currentTheme, toggleTheme } = useThemeContext();
  const isDark = currentTheme === "dark";

  return (
    <Container $isDark={isDark}>
      <div className="container">
        <label className="toggle">
          <input
            id="switch"
            className="input"
            type="checkbox"
            aria-label="Toggle dark/light mode" // asegurarse de que los lectores de pantalla puedan describir el botón correctamente
            checked={isDark}
            onChange={toggleTheme}
          />

          <div className="icon icon--moon">
            <SvgIconComponent icon={Moon} color={"#333"} />
          </div>

          <div className="w-8 icon icon--sun">
            <SvgIconComponent icon={Sun} color={"#ffa500"} />
          </div>
        </label>
      </div>
    </Container>
  );
};
