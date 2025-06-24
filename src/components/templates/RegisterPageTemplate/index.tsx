import {
  Container,
  HelpTextContainer,
  ToggleThemeContainer,
} from "./index.styles";
import { RegisterForm } from "../../organisms";
import { ToggleTheme } from "../../molecules";
import { SvgIconComponent } from "../../atoms";
import { CircleHelp } from "../../../assets/svg";
import { BannerlateralForm } from "../../molecules/BannerlateralForm";

export const RegisterPageTemplate = () => {
  return (
    <Container>
      <BannerlateralForm subTitle="¡Regístrate ahora!" />

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

      <RegisterForm />
    </Container>
  );
};
