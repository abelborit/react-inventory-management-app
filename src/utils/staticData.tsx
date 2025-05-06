import { DynamicIcon } from "../components/molecules/DynamicIcon";
import {
  ConfigModuleInterface,
  DocumentTypeInterface,
  SidebarLinkInterface,
  ThemeOptionInterface,
  UserDropdownOptionInterface,
  UserTypeInterface,
} from "./staticDataInterface";

// User Dropdown Options
export const UserDropdownOptions: UserDropdownOptionInterface[] = [
  {
    label: "Mi perfil",
    icon: <DynamicIcon icon="iconoUser" />,
    type: "miperfil",
  },
  {
    label: "Configuración",
    icon: <DynamicIcon icon="iconoSettings" />,
    type: "configuracion",
  },
  {
    label: "Cerrar sesión",
    icon: <DynamicIcon icon="iconoCerrarSesion" />,
    type: "cerrarsesion",
  },
];

// Sidebar Links
export const SidebarLinks: SidebarLinkInterface[] = [
  {
    label: "Home",
    icon: <DynamicIcon icon="iconohomeoutline" />,
    to: "/home",
  },
  {
    label: "Kardex",
    icon: <DynamicIcon icon="iconocategorias" />,
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: <DynamicIcon icon="iconoreportes" />,
    to: "/reportes",
  },
];

export const SecondarySidebarLinks: SidebarLinkInterface[] = [
  {
    label: "Configuración",
    icon: <DynamicIcon icon="iconosettingsoutline" />,
    to: "/configurar",
  },
];

// Themes Options
export const ThemeOptions: ThemeOptionInterface[] = [
  {
    icon: "🌞",
    description: "light",
  },
  {
    icon: "🌚",
    description: "dark",
  },
];

// Config Modules
export const ConfigModules: ConfigModuleInterface[] = [
  {
    title: "Productos",
    subtitle: "Registra tus productos",
    icon: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    path: "/configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "Ten el control de tu personal",
    icon: "https://i.ibb.co/5vgZ0fX/hombre.png",
    path: "/configurar/usuarios",
  },
  {
    title: "Tu empresa",
    subtitle: "Configura tus opciones básicas",
    icon: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    path: "/configurar/empresa",
  },
  {
    title: "Categoria de productos",
    subtitle: "Asigna categorias a tus productos",
    icon: "https://i.ibb.co/VYbMRLZ/categoria.png",
    path: "/configurar/categorias",
  },
  {
    title: "Marca de productos",
    subtitle: "Gestiona tus marcas",
    icon: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    path: "/configurar/marca",
  },
];

// User Types
export const UserTypes: UserTypeInterface[] = [
  {
    description: "empleado",
    icon: "🪖",
  },
  {
    description: "administrador",
    icon: "👑",
  },
];

// Document Types
export const DocumentTypes: DocumentTypeInterface[] = [
  {
    description: "DNI",
    icon: "🪖",
  },
  {
    description: "Libreta electoral",
    icon: "👑",
  },
  {
    description: "Otros",
    icon: "👑",
  },
];
