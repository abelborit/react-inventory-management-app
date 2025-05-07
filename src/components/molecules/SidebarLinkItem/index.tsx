import { NavLink } from "react-router";
import { ReactNode } from "react";
import { LinkContainer } from "./index.styles";

interface SidebarLinkItemProps {
  label: string;
  icon: ReactNode;
  to: string;
  sidebarOpen?: boolean;
  isMobile?: boolean;
  setIsMenuOpen?: () => void;
}

export const SidebarLinkItem = ({
  label,
  icon,
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
      <span className="Linkicon">{icon}</span>

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
