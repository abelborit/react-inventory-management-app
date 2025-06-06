import { variables } from "../../../styles/variables";
import { SecondarySidebarLinks, SidebarLinks } from "../../../utils/staticData";
import { SvgIconComponent } from "../../atoms";
import { SidebarCardLogout, SidebarLinkItem, ToggleTheme } from "../../molecules";
import { Container, Divider, SidebarContainer } from "./index.styles";
import { ChevronRight } from "../../../assets/svg";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarContainer $isopen={sidebarOpen}>
      <button
        type="button"
        className="Sidebarbutton"
        onClick={handleToggleSidebar}
      >
        <SvgIconComponent icon={ChevronRight} />
      </button>

      <Container $isopen={sidebarOpen} className={sidebarOpen ? "active" : ""}>
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={variables.logo} />
          </div>

          <h2>Inventary Management</h2>
        </div>

        {SidebarLinks.map(({ label, icon, to }) => (
          <SidebarLinkItem
            label={label}
            icon={icon}
            to={to}
            sidebarOpen={sidebarOpen}
            key={label}
          />
        ))}

        <Divider />

        {SecondarySidebarLinks.map(({ label, icon, to }) => (
          <SidebarLinkItem
            label={label}
            icon={icon}
            to={to}
            sidebarOpen={sidebarOpen}
            key={label}
          />
        ))}

        <ToggleTheme />

        <Divider />

        <SidebarCardLogout sidebarOpen={sidebarOpen} />
      </Container>
    </SidebarContainer>
  );
};
