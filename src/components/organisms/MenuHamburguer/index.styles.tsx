import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const Container = styled.div`
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Toggle = styled.label<{ $isOpen: boolean }>`
  position: fixed;
  top: 20px;
  left: ${({ $isOpen }) => ($isOpen ? "90%" : "20px")};
  z-index: 1002;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.5s ease;

  .bars {
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.bg5};
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  input:checked + & .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  input:checked + & #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  input:checked + & #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  input:checked + & #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  input:checked + & {
    transform: rotate(180deg);
    transition-duration: 0.5s;
  }
`;

export const SidebarMobile = styled.div<{ $isopen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isopen }) => ($isopen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  z-index: 1001;
  padding: 20px;
  transition: left 0.4s ease-in-out;
  overflow-y: auto;

  .Logocontent {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 40px;

    .imgcontent img {
      width: 30px;
      animation: flotar 1.7s ease-in-out infinite alternate;
    }

    h2 {
      font-size: 1.75rem;
    }

    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${variables.lgSpacing} 0;
`;
