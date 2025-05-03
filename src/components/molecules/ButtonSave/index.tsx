import { ReactNode } from "react";
import { IconComponent } from "../../atoms";
import { Container } from "./index.styles";

interface ButtonSaveProps {
  title: string;
  bgcolor: string;
  icon: string | ReactNode;
  url: string;
  sidebarOpen: boolean;
  handleClick: () => void;
}

export const ButtonSave = ({
  title,
  bgcolor,
  icon,
  url,
  sidebarOpen,
  handleClick,
}: ButtonSaveProps) => {
  return (
    <Container
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      $bgcolor={bgcolor}
      onClick={handleClick}
      role="button"
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
