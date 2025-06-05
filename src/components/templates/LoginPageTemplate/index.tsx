import {
  BannerlateralContainer,
  Container,
  ContentLogoContainer,
  HelpTextContainer,
  ToggleThemeContainer,
} from "./index.styles";
import { LoginForm } from "../../organisms";
import CarInventory from "../../../assets/car-inventory.svg";
import inventarioslogo from "../../../assets/inventarioslogo.png";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { ToggleTheme } from "../../molecules";
import { SvgIconComponent } from "../../atoms";
import { CircleHelp } from "../../../assets/svg";

export const LoginPageTemplate = () => {
  const deviceType = useDeviceType();

  return (
    <Container>
      {deviceType === "laptop" || deviceType === "desktop" ? (
        <>
          <ContentLogoContainer>
            <img src={inventarioslogo} alt="inventarioslogo" />
            <span>StockPRO</span>
          </ContentLogoContainer>

          <BannerlateralContainer>
            <img src={CarInventory} alt="CarInventory" />
          </BannerlateralContainer>
        </>
      ) : null}

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
