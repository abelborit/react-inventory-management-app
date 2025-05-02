import { variables } from "../../../styles/variables";
import { ButtonSave } from "../ButtonSave";
import { Container } from "./index.styles";

export const SidebarCard = () => {
  const handleLogout = () => {
    console.log("Sesión cerrada");
  };

  return (
    <Container>
      <span className="icon" aria-hidden="true">
        {<variables.iconoayuda />}
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
            handleClick={handleLogout}
          />
        </div>
      </div>
    </Container>
  );
};
