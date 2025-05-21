import { ReactNode } from "react";
import { IconComponent } from "../../atoms";
import { Container } from "./index.styles";

interface ButtonBaseProps {
  title: string;
  bgcolor: string;
  icon: string | ReactNode;
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
      {icon ? (
        <IconComponent title={title} ariaHidden={false}>
          {icon}
        </IconComponent>
      ) : null}

      {title ? <span>{title}</span> : null}
    </Container>
  );
};
