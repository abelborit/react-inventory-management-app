import { SvgIconComponent } from "../../atoms";
import { Container } from "./index.styles";

interface ButtonBaseProps {
  title: string;
  bgcolor?: string;
  textcolor?: string;
  icon: null | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  sidebarOpen: boolean;
  handleClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const ButtonBase = ({
  title,
  bgcolor = "#fff",
  textcolor = "#333",
  icon,
  sidebarOpen,
  handleClick,
  disabled = false,
  type = "button",
}: ButtonBaseProps) => {
  return (
    <Container
      type={type}
      $bgcolor={bgcolor}
      $textcolor={textcolor}
      onClick={handleClick}
      aria-label={title}
      $sidebarOpen={sidebarOpen}
      disabled={disabled}
    >
      {icon ? <SvgIconComponent icon={icon} /> : null}

      {title ? <span>{title}</span> : null}
    </Container>
  );
};
