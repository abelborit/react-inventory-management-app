import { SvgIconWrapper } from "./index.styles";

type IconProps = {
  /* FORMA 1: pasar el componente SVG sin renderizarlo */
  /* de esta forma se pasaría "<SvgIconComponent icon={LogOut} />" */
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  /* FORMA 2: pasar el componente SVG como JSX */
  /* de esta forma se pasaría "<SvgIconComponent icon={<LogOut />} />" */
  // icon:
  //   | React.ReactNode
  //   | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: string;
  color?: string;
  className?: string;
};

export const SvgIconComponent = ({
  icon: IconSvg,
  size = "24px",
  color = "#333",
  className,
}: IconProps) => {
  return (
    <SvgIconWrapper $size={size} $color={color} className={className}>
      <IconSvg />

      {/* {typeof IconSvg === "function" ? <IconSvg /> : IconSvg} */}
    </SvgIconWrapper>
  );
};

/* Diferencias entre FORMA 1 y FORMA 2

- FORMA 1: pasar el componente sin renderizar
  - Más liviano: React no tiene que evaluar el JSX inmediatamente. Solo pasa una referencia a la función (el componente).
  - Lazy rendering: El ícono se renderiza dentro del componente cuando se necesita.
  - Más flexible: Se puede pasar props directamente al ícono desde dentro de SvgIconComponent (como width, height, stroke).
  - Mejor para testeo y extensibilidad.

- FORMA 2: pasar el ícono ya renderizado
  - Ya está renderizado cuando llega al componente, así que no puedes modificarlo desde dentro (por ejemplo, no puedes cambiarle props como color, size).
  - Más peso inicial: Aunque es mínimo, React lo interpreta como un árbol de elementos, no como una función.
  - Menos flexible: No se pueden hacer cosas como "<icon width="20px" />"
*/
