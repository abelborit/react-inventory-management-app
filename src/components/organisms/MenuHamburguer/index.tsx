import { useState } from "react";
import { SidebarLinks, SecondarySidebarLinks } from "../../../utils/staticData";
import { SidebarLinkItem, SidebarCard, ToggleTheme } from "../../molecules";
import { variables } from "../../../styles/variables";
import { Checkbox, Container, Divider, SidebarMobile, Toggle } from "./index.styles";

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
      <Checkbox
        type="checkbox"
        id="checkbox"
        checked={isOpen}
        onChange={handleToggleMenu}
      />

      <Toggle htmlFor="checkbox" className="toggle" $isOpen={isOpen}>
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </Toggle>

      <SidebarMobile $isopen={isOpen}>
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

        <SidebarCard sidebarOpen={true} isMobile={true} />
      </SidebarMobile>
    </Container>
  );
};
