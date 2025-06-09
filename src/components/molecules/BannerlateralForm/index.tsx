import CarInventory from "../../../assets/car-inventory.svg";
import inventarioslogo from "../../../assets/inventarioslogo.png";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { BannerlateralContainer, ContentLogoContainer } from "./index.styles";

interface BannerlateralFormProps {
  subTitle: string;
}

export const BannerlateralForm = ({ subTitle }: BannerlateralFormProps) => {
  const deviceType = useDeviceType();

  return deviceType === "laptop" || deviceType === "desktop" ? (
    <>
      <ContentLogoContainer>
        <img src={inventarioslogo} alt="inventarioslogo" />
        <span>StockPRO</span>
      </ContentLogoContainer>

      <BannerlateralContainer>
        <span>{subTitle}</span>
        <img src={CarInventory} alt="CarInventory" />
      </BannerlateralContainer>
    </>
  ) : null;
};
