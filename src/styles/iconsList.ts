export const iconsList = {
  paletacolores: () =>
    import("react-icons/ci").then((module) => ({ default: module.CiPalette })),
  emoji: () =>
    import("react-icons/bs").then((module) => ({
      default: module.BsEmojiLaughing,
    })),
  agregar: () =>
    import("react-icons/cg").then((module) => ({ default: module.CgMathPlus })),
  flechaabajolarga: () =>
    import("react-icons/bs").then((module) => ({
      default: module.BsArrowDown,
    })),
  flechaarribalarga: () =>
    import("react-icons/bs").then((module) => ({
      default: module.BsArrowUpShort,
    })),
  balance: () =>
    import("react-icons/fa").then((module) => ({
      default: module.FaBalanceScale,
    })),
  iconoreportes: () =>
    import("react-icons/tb").then((module) => ({
      default: module.TbReportAnalytics,
    })),
  iconoempresa: () =>
    import("react-icons/fa").then((module) => ({ default: module.FaBuilding })),
  iconocategorias: () =>
    import("react-icons/md").then((module) => ({
      default: module.MdOutlineCategory,
    })),
  iconomarca: () =>
    import("react-icons/tb").then((module) => ({
      default: module.TbBrandBitbucket,
    })),
  iconoprecioventa: () =>
    import("react-icons/fa").then((module) => ({
      default: module.FaRegMoneyBillAlt,
    })),
  iconopreciocompra: () =>
    import("react-icons/ci").then((module) => ({
      default: module.CiMoneyBill,
    })),
  iconocodigointerno: () =>
    import("react-icons/di").then((module) => ({ default: module.DiCodepen })),
  iconocodigobarras: () =>
    import("react-icons/ai").then((module) => ({
      default: module.AiOutlineBarcode,
    })),
  iconostockminimo: () =>
    import("react-icons/bi").then((module) => ({
      default: module.BiBellMinus,
    })),
  iconostock: () =>
    import("react-icons/ri").then((module) => ({
      default: module.RiStockLine,
    })),
  icononombre: () =>
    import("react-icons/md").then((module) => ({
      default: module.MdDriveFileRenameOutline,
    })),
  iconoemail: () =>
    import("react-icons/md").then((module) => ({
      default: module.MdAlternateEmail,
    })),
  iconopass: () =>
    import("react-icons/ri").then((module) => ({
      default: module.RiLockPasswordLine,
    })),
  iconeditarTabla: () =>
    import("react-icons/ri").then((module) => ({ default: module.RiEditLine })),
  iconeliminarTabla: () =>
    import("react-icons/ri").then((module) => ({
      default: module.RiDeleteBin2Line,
    })),
  iconoFlechabajo: () =>
    import("react-icons/io").then((module) => ({
      default: module.IoIosArrowDown,
    })),
  iconocorona: () =>
    import("react-icons/ri").then((module) => ({
      default: module.RiVipCrownFill,
    })),
  iconoUser: () =>
    import("react-icons/bi").then((module) => ({
      default: module.BiUserCircle,
    })),
  iconoSettings: () =>
    import("react-icons/ri").then((module) => ({
      default: module.RiSettings3Line,
    })),
  iconoCerrarSesion: () =>
    import("react-icons/md").then((module) => ({
      default: module.MdExitToApp,
    })),
  iconofotovacia: () =>
    import("react-icons/fc").then((module) => ({ default: module.FcPicture })),
  iconosupabase: () =>
    import("react-icons/tb").then((module) => ({
      default: module.TbBrandSupabase,
    })),
  iconoreact: () =>
    import("react-icons/fa").then((module) => ({ default: module.FaReact })),
  iconogoogle: () =>
    import("react-icons/bs").then((module) => ({ default: module.BsGoogle })),
  iconocerrar: () =>
    import("react-icons/ri").then((module) => ({
      default: module.RiCloseLine,
    })),
  iconoguardar: () =>
    import("react-icons/bi").then((module) => ({ default: module.BiSave })),
  iconoayuda: () =>
    import("react-icons/bs").then((module) => ({
      default: module.BsQuestionCircle,
    })),
  iconopie: () =>
    import("react-icons/hi").then((module) => ({
      default: module.HiOutlineChartPie,
    })),
  iconolineal: () =>
    import("react-icons/sl").then((module) => ({ default: module.SlGraph })),
  iconobars: () =>
    import("react-icons/bs").then((module) => ({
      default: module.BsBarChartLine,
    })),
  iconocalculadora: () =>
    import("react-icons/ai").then((module) => ({
      default: module.AiOutlineCalculator,
    })),
  iconocheck: () =>
    import("react-icons/bs").then((module) => ({
      default: module.BsCalendarCheck,
    })),
  iconoflechaderecha: () =>
    import("react-icons/io").then((module) => ({
      default: module.IoIosArrowForward,
    })),
  iconoprev: () =>
    import("react-icons/gr").then((module) => ({
      default: module.GrFormPrevious,
    })),
  icononext: () =>
    import("react-icons/gr").then((module) => ({
      default: module.GrCaretNext,
    })),
  iconotodos: () =>
    import("react-icons/md").then((module) => ({
      default: module.MdOutlineBorderAll,
    })),
  iconohomeoutline: () =>
    import("react-icons/ai").then((module) => ({
      default: module.AiOutlineHome,
    })),
  iconosettingsoutline: () =>
    import("react-icons/ai").then((module) => ({
      default: module.AiOutlineSetting,
    })),
} as const;

export type IconKey = keyof typeof iconsList;
