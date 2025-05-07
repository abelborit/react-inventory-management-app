import { NavLink } from "react-router";
import { ReactNode } from "react";
import { LinkContainer } from "./index.styles";

interface SidebarLinkItemProps {
  label: string;
  icon: ReactNode;
  to: string;
  sidebarOpen: boolean;
}

export const SidebarLinkItem = ({
  label,
  icon,
  to,
  sidebarOpen,
}: SidebarLinkItemProps) => (
  <LinkContainer key={label} className={sidebarOpen ? "active" : ""}>
    <NavLink
      to={to}
      className={({ isActive }) => `Links ${isActive ? "active" : ""}`}
    >
      <span className="Linkicon">{icon}</span>

      <span className={sidebarOpen ? "labelVisible" : "labelHidden"}>
        {label}
      </span>
    </NavLink>
  </LinkContainer>
);
