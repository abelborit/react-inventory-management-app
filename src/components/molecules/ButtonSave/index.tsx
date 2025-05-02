import { IconComponent } from "../../atoms";
import { Container } from "./index.styles";

interface ButtonSaveProps {
  title: string;
  bgcolor: string;
  icon: string;
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
      <IconComponent title={title} ariaHidden={false}>
        {icon}
      </IconComponent>

      <span>{title}</span>
    </Container>
  );
};
