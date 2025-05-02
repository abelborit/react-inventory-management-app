import { ReactNode } from "react";
import { IconComponent } from "../../atoms";
import { Container } from "./index.styles";

interface ButtonSaveProps {
  title: string;
  bgcolor: string;
  icon: string | ReactNode;
  url: string;
  handleClick: () => void;
}

export const ButtonSave = ({
  title,
  bgcolor,
  icon,
  url,
  handleClick,
}: ButtonSaveProps) => {
  return (
    /* TODO: cuando sea mobile que sea un botón para hacer logout */
    <Container
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      $bgcolor={bgcolor}
      onClick={handleClick}
      role="button"
      aria-label={title}
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
