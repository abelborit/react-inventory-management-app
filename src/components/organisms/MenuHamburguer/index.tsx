import { useState } from "react";
import { SidebarLinks, SecondarySidebarLinks } from "../../../utils/staticData";
import { SidebarLinkItem, SidebarCardLogout, ToggleTheme } from "../../molecules";
import { variables } from "../../../styles/variables";
import {
  Container,
  Divider,
  SidebarMobile,
  ToggleButton,
} from "./index.styles";

export const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <ToggleButton onClick={handleToggleMenu} $isOpen={isOpen}>
        <span className="bar" id="bar1" />
        <span className="bar" id="bar2" />
        <span className="bar" id="bar3" />
      </ToggleButton>

      <SidebarMobile $isOpen={isOpen}>
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={variables.logo} alt="logo" />
          </div>

          <h2>Inventary Management</h2>
        </div>

        {SidebarLinks.map(({ label, icon, to }) => (
          <SidebarLinkItem
            label={label}
            icon={icon}
            to={to}
            key={label}
            isMobile
            setIsMenuOpen={handleClose}
          />
        ))}

        <Divider />

        {SecondarySidebarLinks.map(({ label, icon, to }) => (
          <SidebarLinkItem
            label={label}
            icon={icon}
            to={to}
            key={label}
            isMobile
            setIsMenuOpen={handleClose}
          />
        ))}

        <ToggleTheme />

        <Divider />

        <SidebarCardLogout sidebarOpen={true} isMobile={true} />
      </SidebarMobile>
    </Container>
  );
};
