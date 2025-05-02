import { ReactNode } from "react";
import { Icon } from "./index.styles";

interface IconComponentProps {
  children: ReactNode;
  size?: number | string; // Tamaño opcional, por defecto 24px
  title?: string; // Accesibilidad: Sirve para proporcionar una etiqueta legible por screen readers. | También puede mostrar un tooltip nativo del navegador al pasar el mouse. | Útil si el ícono tiene un propósito informativo.
  ariaHidden?: boolean; // Accesibilidad: Si se pasa true, indica que el lector de pantalla debe ignorar el elemento. | Útil si el ícono es decorativo y no tiene un propósito funcional (como una flecha, ícono de diseño, etc.).
}

export const IconComponent = ({
  children,
  size = 24,
  title,
  ariaHidden = true,
}: IconComponentProps) => {
  return (
    <Icon
      $size={size}
      title={title}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : "img"} // Define el rol semántico del ícono para accesibilidad. | Si aria-hidden es false (es decir, sí se debe leer), entonces role="img" indica que es una imagen significativa.
    >
      {children}
    </Icon>
  );
};
