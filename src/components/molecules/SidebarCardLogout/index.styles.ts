import styled from "styled-components";

export const Container = styled.div<{
  $sidebarOpen: boolean;
  $isMobile?: boolean;
}>`
  width: ${({ $isMobile }) => ($isMobile ? "200px" : "100%")};
  padding: ${({ $sidebarOpen }) => ($sidebarOpen ? "1rem" : "")};
  text-align: center;
  position: relative;

  .icon {
    position: relative;

    div {
      position: absolute;
      top: -25px;
      right: 50%;
      transform: translate(50%);
      z-index: 100;
    }
  }

  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props) => props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;

    .circle1,
    .circle2 {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }

    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }

    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }

    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #000;
    }

    .contentBtn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
