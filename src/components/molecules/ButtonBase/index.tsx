import { SvgIconComponent } from "../../atoms";
import { Container } from "./index.styles";

interface ButtonBaseProps {
  title: string;
  bgcolor: string;
  icon: null | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  sidebarOpen: boolean;
  handleClick: () => void;
}

export const ButtonBase = ({
  title,
  bgcolor,
  icon,
  sidebarOpen,
  handleClick,
}: ButtonBaseProps) => {
  return (
    <Container
      type="button"
      $bgcolor={bgcolor}
      onClick={handleClick}
      aria-label={title}
      $sidebarOpen={sidebarOpen}
    >
      {icon ? <SvgIconComponent icon={icon} /> : null}

      {title ? <span>{title}</span> : null}
    </Container>
  );
};
