import {
  AiOutlineHome,
  AiOutlineSetting,
  BiUserCircle,
  MdOutlineCategory,
  MdExitToApp,
  RiSettings3Line,
  TbReportAnalytics,
} from "./staticDataIcons";
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
  {
    label: "Mi perfil",
    icon: <BiUserCircle />,
    type: "miperfil",
  },
  {
    label: "Configuración",
    icon: <RiSettings3Line />,
    type: "configuracion",
  },
  {
    label: "Cerrar sesión",
    icon: <MdExitToApp />,
    type: "cerrarsesion",
  },
];

// Sidebar Links
export const SidebarLinks: SidebarLinkInterface[] = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: PREFIX_DASHBOARD + "home",
  },
  {
    label: "Kardex",
    icon: <MdOutlineCategory />,
    to: PREFIX_DASHBOARD + "kardex",
  },
  {
    label: "Reportes",
    icon: <TbReportAnalytics />,
    to: PREFIX_DASHBOARD + "reportes",
  },
];

export const SecondarySidebarLinks: SidebarLinkInterface[] = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: PREFIX_DASHBOARD + "configurar",
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
    path: PREFIX_DASHBOARD + "configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "Ten el control de tu personal",
    icon: "https://i.ibb.co/5vgZ0fX/hombre.png",
    path: PREFIX_DASHBOARD + "configurar/usuarios",
  },
  {
    title: "Tu empresa",
    subtitle: "Configura tus opciones básicas",
    icon: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    path: PREFIX_DASHBOARD + "configurar/empresa",
  },
  {
    title: "Categoria de productos",
    subtitle: "Asigna categorias a tus productos",
    icon: "https://i.ibb.co/VYbMRLZ/categoria.png",
    path: PREFIX_DASHBOARD + "configurar/categorias",
  },
  {
    title: "Marca de productos",
    subtitle: "Gestiona tus marcas",
    icon: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    path: PREFIX_DASHBOARD + "configurar/marca",
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
