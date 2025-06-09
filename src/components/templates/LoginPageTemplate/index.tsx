import {
  Container,
  HelpTextContainer,
  ToggleThemeContainer,
} from "./index.styles";
import { LoginForm } from "../../organisms";
import { BannerlateralForm, ToggleTheme } from "../../molecules";
import { SvgIconComponent } from "../../atoms";
import { CircleHelp } from "../../../assets/svg";

export const LoginPageTemplate = () => {
  return (
    <Container>
      <BannerlateralForm subTitle="¡Bienvenido de nuevo!" />

      <ToggleThemeContainer>
        <ToggleTheme />
      </ToggleThemeContainer>

      <HelpTextContainer>
        <p>
          Puedes crearte una nueva cuenta o solicitar a tu
          <span>
            empleador que te cree una.{" "}
            <SvgIconComponent icon={CircleHelp} color={"#8d8d8d"} size="18px" />
          </span>
        </p>
      </HelpTextContainer>

      <LoginForm />
    </Container>
  );
};
