// components/Icon.tsx
import { SvgIconWrapper } from "./index.styles";

type IconProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: string;
  color?: string;
};

export const SvgIconComponent = ({
  icon: IconSvg,
  size = "24px",
  color = "black",
}: IconProps) => {
  return (
    <SvgIconWrapper $size={size} $color={color}>
      <IconSvg />
    </SvgIconWrapper>
  );
};
