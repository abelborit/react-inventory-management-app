import { CircleHelp, LogOut } from "../../../assets/svg";
import { SvgIconComponent } from "../../atoms";
import { ButtonBase } from "../ButtonBase";
import { Container } from "./index.styles";

interface SidebarCardLogoutProps {
  sidebarOpen: boolean;
  isMobile?: boolean;
}

export const SidebarCardLogout = ({
  sidebarOpen,
  isMobile = false,
}: SidebarCardLogoutProps) => {
  const handleLogout = () => {
    console.log("Sesión cerrada");
  };

  return sidebarOpen ? (
    <Container $sidebarOpen={sidebarOpen} $isMobile={isMobile}>
      <div className="icon" aria-hidden="true">
        <SvgIconComponent icon={CircleHelp} color={"#f8f2fd"} size="60px" />
      </div>

      <div className="cardContent">
        <div className="circle1" aria-hidden="true" />
        <div className="circle2" aria-hidden="true" />

        <h3>Cerrar sesión</h3>

        <div className="contentBtn">
          <ButtonBase
            // title="Cerrar sesión"
            title=""
            icon={LogOut}
            bgcolor="#f8f2fd"
            sidebarOpen={sidebarOpen}
            handleClick={handleLogout}
          />
        </div>
      </div>
    </Container>
  ) : (
    <Container $sidebarOpen={sidebarOpen}>
      <div className="contentBtn">
        <ButtonBase
          // title="Cerrar sesión"
          title=""
          icon={LogOut}
          bgcolor="#f8f2fd"
          sidebarOpen={sidebarOpen}
          handleClick={handleLogout}
        />
      </div>
    </Container>
  );
};
