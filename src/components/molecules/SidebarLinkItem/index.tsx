import { NavLink } from "react-router";
import { LinkContainer } from "./index.styles";
import { SvgIconComponent } from "../../atoms";

interface SidebarLinkItemProps {
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  to: string;
  sidebarOpen?: boolean;
  isMobile?: boolean;
  setIsMenuOpen?: () => void;
}

export const SidebarLinkItem = ({
  label,
  icon: Icon,
  to,
  sidebarOpen = false,
  isMobile = false,
  setIsMenuOpen = () => {},
}: SidebarLinkItemProps) => (
  <LinkContainer
    key={label}
    className={isMobile ? "active" : sidebarOpen ? "active" : ""}
    onClick={isMobile ? setIsMenuOpen : () => {}}
  >
    <NavLink
      to={to}
      className={({ isActive }) => `Links ${isActive ? "active" : ""}`}
    >
      <SvgIconComponent className="Linkicon" icon={Icon} />

      <span
        className={
          isMobile
            ? "labelVisible"
            : sidebarOpen
            ? "labelVisible"
            : "labelHidden"
        }
      >
        {label}
      </span>
    </NavLink>
  </LinkContainer>
);
