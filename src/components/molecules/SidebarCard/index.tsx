import { ButtonBase } from "../ButtonBase";
import { Container } from "./index.styles";
import { BsQuestionCircle } from "react-icons/bs";

interface SidebarCardProps {
  sidebarOpen: boolean;
  isMobile?: boolean;
}

export const SidebarCard = ({
  sidebarOpen,
  isMobile = false,
}: SidebarCardProps) => {
  const handleLogout = () => {
    console.log("Sesión cerrada");
  };

  return sidebarOpen ? (
    <Container $sidebarOpen={sidebarOpen} $isMobile={isMobile}>
      <span className="icon" aria-hidden="true">
        <BsQuestionCircle />
      </span>

      <div className="cardContent">
        <div className="circle1" aria-hidden="true" />
        <div className="circle2" aria-hidden="true" />

        <h3>Cerrar sesión</h3>

        <div className="contentBtn">
          <ButtonBase
            // title="Cerrar sesión"
            title=""
            // icon=""
            icon="🔒"
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
          // icon=""
          icon="🔒"
          bgcolor="#f8f2fd"
          sidebarOpen={sidebarOpen}
          handleClick={handleLogout}
        />
      </div>
    </Container>
  );
};
