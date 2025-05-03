import { NavLink } from "react-router";
import { ReactNode } from "react";

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
  <div
    key={label}
    className={sidebarOpen ? "LinkContainer active" : "LinkContainer"}
  >
    <NavLink
      to={to}
      className={({ isActive }) => `Links ${isActive ? "active" : ""}`}
    >
      <span className="Linkicon">{icon}</span>

      <span className={sidebarOpen ? "label_ver" : "label_oculto"}>
        {label}
      </span>
    </NavLink>
  </div>
);
