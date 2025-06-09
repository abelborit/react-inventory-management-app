import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  @media ${device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
`;

export const ToggleThemeContainer = styled.div`
  z-index: 9999;
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

export const HelpTextContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  gap: 4px;
  z-index: 999;
  max-width: 300px;
  text-align: left;

  p {
    color: #8d8d8d;
    font-size: 12px;
    font-weight: 500;

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 0.25rem;
    }
  }
`;
