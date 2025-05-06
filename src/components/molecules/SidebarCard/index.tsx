import { ButtonSave } from "../ButtonSave";
import { DynamicIcon } from "../DynamicIcon";
import { Container } from "./index.styles";

interface SidebarCardProps {
  sidebarOpen: boolean;
}

export const SidebarCard = ({ sidebarOpen }: SidebarCardProps) => {
  const handleLogout = () => {
    console.log("Sesión cerrada");
  };

  return sidebarOpen ? (
    <Container $sidebarOpen={sidebarOpen}>
      <span className="icon" aria-hidden="true">
        <DynamicIcon icon="iconoayuda" propsIconContainer={{ size: 50 }} />
      </span>

      <div className="cardContent">
        <div className="circle1" aria-hidden="true" />
        <div className="circle2" aria-hidden="true" />

        <h3>Cerrar sesión</h3>

        <div className="contentBtn">
          <ButtonSave
            // title="Cerrar sesión"
            title=""
            // icon=""
            icon="🔒"
            bgcolor="#f8f2fd"
            url=""
            sidebarOpen={sidebarOpen}
            handleClick={handleLogout}
          />
        </div>
      </div>
    </Container>
  ) : (
    <Container $sidebarOpen={sidebarOpen}>
      <div className="contentBtn">
        <ButtonSave
          // title="Cerrar sesión"
          title=""
          // icon=""
          icon="🔒"
          bgcolor="#f8f2fd"
          url=""
          sidebarOpen={sidebarOpen}
          handleClick={handleLogout}
        />
      </div>
    </Container>
  );
};
