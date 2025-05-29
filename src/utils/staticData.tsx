import {
  ChartLine,
  Cog,
  Crown,
  House,
  Moon,
  ScrollText,
  ShieldCheck,
  Sun,
  UserRound,
} from "../assets/svg";
import {
  ConfigModuleInterface,
  DocumentTypeInterface,
  SidebarLinkInterface,
  ThemeOptionInterface,
  UserDropdownOptionInterface,
  UserTypeInterface,
} from "./staticDataInterface";

const PREFIX_DASHBOARD = "/dashboard/";

// User Dropdown Options
export const UserDropdownOptions: UserDropdownOptionInterface[] = [
  // {
  //   label: "Mi perfil",
  //   icon: <BiUserCircle />,
  //   type: "miperfil",
  // },
  // {
  //   label: "Configuración",
  //   icon: <RiSettings3Line />,
  //   type: "configuracion",
  // },
  // {
  //   label: "Cerrar sesión",
  //   icon: <MdExitToApp />,
  //   type: "cerrarsesion",
  // },
];

// Sidebar Links
export const SidebarLinks: SidebarLinkInterface[] = [
  {
    label: "Home",
    icon: House,
    to: PREFIX_DASHBOARD + "home",
  },
  {
    label: "Kardex",
    icon: ScrollText,
    to: PREFIX_DASHBOARD + "kardex",
  },
  {
    label: "Reportes",
    icon: ChartLine,
    to: PREFIX_DASHBOARD + "reportes",
  },
];

export const SecondarySidebarLinks: SidebarLinkInterface[] = [
  {
    label: "Configuración",
    icon: Cog,
    to: PREFIX_DASHBOARD + "configurar",
  },
];

// Themes Options
export const ThemeOptions: ThemeOptionInterface[] = [
  {
    // icon: "🌞",
    icon: Sun,
    description: "light",
  },
  {
    // icon: "🌚",
    icon: Moon,
    description: "dark",
  },
];

// Config Modules
export const ConfigModules: ConfigModuleInterface[] = [
  {
    title: "Productos",
    subtitle: "Registra tus productos",
    illustration: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    path: PREFIX_DASHBOARD + "configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "Ten el control de tu personal",
    illustration: "https://i.ibb.co/5vgZ0fX/hombre.png",
    path: PREFIX_DASHBOARD + "configurar/usuarios",
  },
  {
    title: "Tu empresa",
    subtitle: "Configura tus opciones básicas",
    illustration: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    path: PREFIX_DASHBOARD + "configurar/empresa",
  },
  {
    title: "Categoria de productos",
    subtitle: "Asigna categorias a tus productos",
    illustration: "https://i.ibb.co/VYbMRLZ/categoria.png",
    path: PREFIX_DASHBOARD + "configurar/categorias",
  },
  {
    title: "Marca de productos",
    subtitle: "Gestiona tus marcas",
    illustration: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    path: PREFIX_DASHBOARD + "configurar/marca",
  },
];

// User Types
export const UserTypes: UserTypeInterface[] = [
  {
    description: "empleado",
    icon: UserRound,
  },
  {
    description: "administrador",
    icon: Crown,
  },
];

// Document Types
export const DocumentTypes: DocumentTypeInterface[] = [
  {
    description: "DNI",
    icon: ShieldCheck,
  },
  {
    description: "Libreta electoral",
    icon: ShieldCheck,
  },
  {
    description: "Otros",
    icon: ShieldCheck,
  },
];
