import { ReactNode } from "react";

// Dropdown option for user menu
export interface UserDropdownOptionInterface {
  label: string;
  icon: ReactNode;
  type: string;
}

// Sidebar link item
export interface SidebarLinkInterface {
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  to: string;
}

// Theme option (light/dark)
export interface ThemeOptionInterface {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // icon: string;
  description: string;
}

// Configuration module card
export interface ConfigModuleInterface {
  title: string;
  subtitle: string;
  illustration: string;
  path: string;
}

// User type option
export interface UserTypeInterface {
  description: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

// Document type option
export interface DocumentTypeInterface {
  description: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
