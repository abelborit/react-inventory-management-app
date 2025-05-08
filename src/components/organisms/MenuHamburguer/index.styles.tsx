import styled, { css } from "styled-components";
import { variables } from "../../../styles/variables";

export const Container = styled.div``;

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 26px;
  left: ${({ $isOpen }) => ($isOpen ? "calc(100% - 3rem)" : "20px")};
  z-index: 1002;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ $isOpen }) => ($isOpen ? "0px" : "8px")};
  background: transparent;
  border: none;
  transition: left 0.5s ease;

  .bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.bg5};
    border-radius: 4px;
    transition: transform 0.5s ease, width 0.5s ease;
  }

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          .bar#bar1 {
            width: 100%;
            transform: rotate(45deg) translate(3px, 3px);
          }
          .bar#bar2 {
            width: 0;
            transform: scaleX(0);
          }
          .bar#bar3 {
            width: 100%;
            transform: rotate(-45deg) translate(2.5px, -2.5px);
          }
        `
      : css`
          .bar#bar1,
          .bar#bar3 {
            width: 70%;
            transform: none;
          }
          .bar#bar2 {
            width: 100%;
            transform: none;
          }
        `}
`;

export const SidebarMobile = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  z-index: 1001;
  padding: 20px;
  transition: left 0.5s ease;
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
      margin-right: 2rem;
      font-size: 1.75rem;
    }

    @keyframes flotar {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(4px);
      }
      100% {
        transform: translateY(0);
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
