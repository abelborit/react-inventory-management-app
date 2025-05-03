import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  /* background-color: ${(props) => props.theme.bgtotal}; */
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};

  .contentSidebar {
    display: none;
  }

  .contentMenuHamburguer {
    background-color: blue;
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${device.tablet} {
    /* los 65px será para el siderbar cuando esté cerrado (no desplegado) */
    grid-template-columns: 65px 1fr;

    &.active {
      grid-template-columns: 220px 1fr;
    }

    .contentSidebar {
      display: initial;
    }

    .contentMenuHamburguer {
      display: none;
    }
  }

  .contentRoutes {
    /* como hay una sola columna en mobile entonces que ocupe esa columna */
    grid-column: 1;
    width: 100%;

    @media ${device.tablet} {
      /* como hay dos columnas desde tablet entonces que ocupe la segunda columna */
      grid-column: 2;
    }
  }
`;
