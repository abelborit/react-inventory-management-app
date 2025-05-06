import { variables } from "../../../styles/variables";
import { SecondarySidebarLinks, SidebarLinks } from "../../../utils/staticData";
import { ToggleTheme } from "../../molecules";
import { SidebarCard, SidebarLinkItem } from "../../molecules";
import { DynamicIcon } from "../../molecules/DynamicIcon";
import { Container, Divider, SidebarContainer } from "./index.styles";

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
        <DynamicIcon icon="iconoflechaderecha" />
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

        <SidebarCard sidebarOpen={sidebarOpen} />
      </Container>
    </SidebarContainer>
  );
};
